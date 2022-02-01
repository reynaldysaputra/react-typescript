import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../models';
import SingleTodo from './singleTodo';

interface Props {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
  completedTodos: Todo[],
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList: React.FC<Props> = ({todos, setTodos, completedTodos, setCompletedTodos}) => {
  return(
    <div className='container'>
      <Droppable droppableId='TodosList'>
        {(provider, snapshot) => (
          <div 
            className={`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`} 
            ref={provider.innerRef} 
            {...provider.droppableProps}
          >
            {todos.map((todo, index) => (
              <SingleTodo 
                index={index}
                key={todo.id} 
                todo={todo} 
                todos={todos} 
                setTodos={setTodos} 
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId='TodosRemove'>
        {(provider, snapshot) => (
          <div 
            className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`} 
            ref={provider.innerRef} 
            {...provider.droppableProps}
          >
            <span className='todos__single--text'>Completed Task</span>
            {completedTodos.map((todo, index) => (
              <SingleTodo 
                index={index}
                key={todo.id} 
                todo={todo} 
                todos={completedTodos} 
                setTodos={setCompletedTodos} 
              />
            ))}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

export default TodoList;