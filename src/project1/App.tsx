import React from 'react';

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

let someData: typeB = {
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

function App() {
  return (
    <div className="App">
      Hello word      
    </div>
  );
}

export default App;
