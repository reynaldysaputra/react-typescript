import * as React from 'react';
import { Note } from '../app';
import Notes from './Notes';

interface INoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const NoteList: React.FunctionComponent<INoteListProps> = ({notes, setNotes}) => {
  const handleDelete = (id: string) => {
    setNotes(notes => notes.filter(note => note.id !== id));
  }

  return(
    <div>
      <h2>Header</h2>
      {console.log('Notes List')}

      {notes?.map(note => (
        <Notes key={note.id} note={note} handleDelete={handleDelete} />
      ))}
    </div>
  )
};

export default NoteList;