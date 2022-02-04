import React, {useState} from 'react';
import { IState } from '../app';
import styles from '../styles.module.css';

interface Props {
  people: IState["people"],
  setPeople:  React.Dispatch<React.SetStateAction<IState["people"]>>
}

const AddToList: React.FC<Props> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
}) 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setInput({
          ...input,
          [e.target.name]: e.target.value
      })
  }

  const handleClick = (): void => {
    if(!input.name || !input.age) return

    setPeople([
        ...people,
        {
            name: input.name,
            age: parseInt(input.age),
            img: input.img,
            note: input.note
        }
    ]);

    setInput({
        name: "",
        age: "",
        img: "",
        note: ""
    })
  }

  return (
      <div className={styles.AddToList}>
          <input 
              type="text"
              onChange={handleChange}
              className={styles.AddToListInput}
              name="name"
              value={input.name}
              placeholder="Name"
          />
          <input 
              type="text"
              onChange={handleChange}
              className={styles.AddToListInput}
              name="age"
              value={input.age}
              placeholder="Age"
          />
          <input 
              type="text"
              onChange={handleChange}
              className={styles.AddToListInput}
              name="img"
              value={input.img}
              placeholder="Image Url"
          />
          <textarea
              onChange={handleChange}
              className={styles.AddToListInput}
              name="note"
              value={input.note}
              placeholder="Note"
          />
          <button
              onClick={handleClick}
              className={styles.AddToListBtn}
          >
              Add to List
          </button>
      </div>
  )
}

export default AddToList