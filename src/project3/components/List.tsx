import React from 'react';
import { IState } from '../app';
import styles from '../styles.module.css';

const List: React.FC<IState> = ({people}) => {
  return(
    <ul>
      {people.map(person => (
        <li key={person.img} className={styles.List}>
          <div className={styles.ListHeader}>
            <img src={person.img} className={styles.ListImg} />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age}</p>
          <p className={styles.ListNote}>{person.note}</p>
        </li>
      ))}
    </ul>
  )
}

export default List;