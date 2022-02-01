import React, { useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import './app.css';
import InputFields from './components/inputFields';
import TodoList from './components/todoList';
import { Todo } from './models';

let name: string;
let age: number | string; // union type
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; // tuple type

interface Person {
  name: string,
  age?: number
}

interface Guy extends Person {
  profession: string
}

type person = {
  name: string,
  age?: string | number;
}

type typeA = {
  a: string,
  b: number
}

type typeB = typeA & {
  c: boolean,
  d: string
}

let someData: typeB  = {
  a: '1',
  b: 25,
  c: true,
  d: 'Lorem ipsum'
}

let printCode: (code: number) => number;

let persons: person = {
  name: 'Reynaldy saputra',
  age: 21
}

let unknownType: unknown; // Better than any type

const App:React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(todo){
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todos: todo,
          isDone: false
        }
      ])
      setTodo("");
    }
  }

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Jika destinasinya ketika di drag tidak ditemukan maka return
    if(!destination) return;
    // Jika source index dan destinasi index dan juga droppableId sama maka return
    if(source.index === destination.index && destination.droppableId === source.droppableId) return;

    let add, activeTodo = todos, completeTodo = completedTodos;

    // Logika untuk memindahkan/menghapus item todo
    if(source.droppableId === 'TodosList'){
      add = activeTodo[source.index];
      activeTodo.splice(source.index, 1);
    }else {
      add = completeTodo[source.index];
      completeTodo.splice(source.index, 1);
    }

    // Logika untuk menambah item todo ke masing-masing todo
    if(destination.droppableId === 'TodosList'){
      activeTodo.splice(destination.index, 0, add);
    }else {
      completedTodos.splice(destination.index, 0, add);
    }

    setTodos(activeTodo);
    setCompletedTodos(completeTodo)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <div className="heading">
          Taskify  
        </div>     
        <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> 
        <TodoList 
          todos={todos} 
          setTodos={setTodos} 
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
