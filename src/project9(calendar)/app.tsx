import React, { useEffect, useState } from 'react';
import { StyledApp, GlobalStyle } from './App.styles';
import Hatch from './components/Hatch/Hatch';
import { createCalendar, HatchType } from './helpers';

function ProjectCalendar(){
  const [hatches, setHatches] = useState([] as HatchType[]);

  useEffect(() => {
    const calendar = localStorage.calendar ? 
      JSON.parse(localStorage.calendar) :
      createCalendar();

      setHatches(calendar);
  }, [])

  useEffect(() => {
    hatches.length && localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches])

  const handleClickHatch = (nr: number) => {
    const updateHatches = hatches.map(hatch => (
      hatch.nr === nr ? {...hatch, open: !hatch.open} : hatch
    ))

    setHatches(updateHatches);
  }

  return(
    <StyledApp>
      <GlobalStyle/>
      {hatches.map(hatch => (
        <Hatch key={hatch.nr} hatchData={hatch} clickHandle={() => handleClickHatch(hatch.nr)} />
      ))}
    </StyledApp>
  )
}

export default ProjectCalendar;