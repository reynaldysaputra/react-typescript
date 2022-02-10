import React, { FC } from 'react';
import {useQuery, UseQueryResult} from 'react-query';
import { IPerson } from '../../lib/interfaces/IPerson';

const fetchPerson = async (): Promise<IPerson> => {
  const res = await fetch('http://localhost:4000/posts');
  return res.json();
}

const PagePerson: FC = () => {
  const {status, error, data}: UseQueryResult<IPerson, Error> = useQuery<IPerson, Error>(
    'person', 
    fetchPerson
  )

  return(
    <div>
      <i>Hello word</i>
      {console.log(data)}
    </div>
  )
}

export default PagePerson;