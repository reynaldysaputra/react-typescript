import React from 'react';
import { HatchType } from '../../helpers';
import { StyledHatch } from './Hatch.styles';

interface Props {
  hatchData: HatchType
  clickHandle: (nr: number) => void
}

const Hatch: React.FC<Props> = ({ hatchData, clickHandle }) => {
  const {nr, img, text, open} = hatchData;

  return (
    <StyledHatch open={open} background={img} onClick={() => clickHandle(nr)}>
      <div className='front'>
        <p>{nr}</p>
      </div>
      <div className='back'>
        <p>{text}</p>
      </div>
    </StyledHatch>
  )
}

export default Hatch;