import React from 'react';
import { Todo } from '../models';
import {AiFillDelete, AiFillEdit} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';

interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {
  
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

  return(
    <form className='todos__single'>
      <span 
        className='todos__single--text' 
        style={{textDecoration : todo.isDone ? 'line-through' : 'inherit'}}
      >{todo.todos}</span>
      <div>
        <span className='icon'>
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
  )
}

export default SingleTodo;