import React from 'react';
import {NoteType} from '../helpers';
import Note from './note';
import styled from 'styled-components';

interface Props {
  notes: NoteType[]
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Octave: React.FC<Props> = ({ notes, clickHandler }) => {
  return(
    <Wrapper>
      <div>
        {notes.map((element: NoteType) => (
          <Note
            key={element.note}
            color={element.color}
            note={element.note}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </Wrapper>
  )
}

export default Octave;