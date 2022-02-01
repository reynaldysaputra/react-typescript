import React, {  useEffect, useRef, useState } from 'react';
import { Todo } from '../models';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  index: number,
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({index, todo, todos, setTodos}) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [valTodo, setValTodo] = useState<string>(todo.todos);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleDone = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo
      )
    )
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map(todo => 
        todo.id === id ? {...todo, todos: valTodo} : todo  
      )
    )

    setEdit(false);
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return(
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provider, snapshot) => (
        <form 
          className={`todos__single ${snapshot.isDragging ? 'drag' : 'remove'}`}
          onSubmit={(e) => handleEdit(e, todo.id)}
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
        >
          {edit ? (
            <input 
              type="text" 
              value={valTodo} 
              onChange={(e) => setValTodo(e.target.value)}
              className='todos__single--text' 
              ref={inputRef}
            />
          ) : (
            <span 
              className='todos__single--text' 
              style={{textDecoration : todo.isDone ? 'line-through' : 'inherit'}}
            >{todo.todos}</span>
          )}
          <div>
            <span className='icon' onClick={() => {          
              if(!edit && !todo.isDone) setEdit(!edit);
            }}>
              {console.log(edit)}
              <AiFillEdit/>
            </span>
            <span className='icon' onClick={() => handleDelete(todo.id)}>
              <AiFillDelete/>
            </span>
            <span className='icon' onClick={() => handleDone(todo.id)}>
              <MdDone/>
            </span>
          </div>
        </form>
      )}
    </Draggable>
  )
}

export default SingleTodo;