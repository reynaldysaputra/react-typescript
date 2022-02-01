import React, { useState } from 'react';
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

  return (
    <div className="App">
      <div className="heading">
        Taskify  
      </div>     
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} /> 
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
