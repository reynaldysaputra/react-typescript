import React from 'react';
import Octave from './components/octave';
import { notes } from './helpers';

function AppPiano(params: any) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const audio = new Audio(`sounds/piano_${e.currentTarget.value}.mp3`);
    audio.play();
  };


  return(
    <div>
      <Octave notes={notes} clickHandler={handleClick} />
    </div>  
  )
}

export default AppPiano;