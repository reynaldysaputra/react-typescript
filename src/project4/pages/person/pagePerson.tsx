import React, { FC } from 'react';
import {useQuery, UseQueryResult} from 'react-query';
import { IPerson } from '../../lib/interfaces/IPerson';

const fetchPerson = async (): Promise<IPerson[]> => {
  const res = await fetch('http://localhost:4000/posts');
  return res.json();
}

interface Propss {
  listPerson: IPerson[] | undefined
}

const ListPerson: React.FC<Propss> = ({listPerson}) => {
  return (
    <div>
      {listPerson?.map(item => (
        <div key={item.id}>
          <p>{item.id}</p>
          <p>Name: {item.name}</p>
          <p>Age: {item.age}</p><br/>
        </div>
      ))}
    </div>
  )
}

const PagePerson: FC = () => {
  const {isLoading, isError, status, data} = useQuery<IPerson[], Error>(
    'person', 
    fetchPerson
  )

  if(isLoading) return <h1>Loading....</h1>
  if(isError) return <h1>Error</h1>

  return(
    <div>
      <i>Hello word</i>
      <ListPerson listPerson={data} />
    </div>
  )
}

export default PagePerson;