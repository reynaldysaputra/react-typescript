import React, { useState } from 'react';
import AddToList from './components/AddToList';
import List from './components/List';
import styles from './styles.module.css';

export interface IState {
  people: {
    name: string;
    age: number;
    img: string;
    note?: string
  }[]
}

function ProjectThree(){
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://caricom.org/wp-content/uploads/Floyd-Morris-Remake-1024x879-1.jpg"
    }
  ]);

  return(
    <div className={styles.App}>
      <h1>People Invited to my Party</h1> 
      <List people={people}  />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  )
}

export default ProjectThree;