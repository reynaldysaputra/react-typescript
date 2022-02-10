import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { IPerson } from '../../lib/interfaces/IPerson';

const getPersonById = async(id: string | string[] | undefined): Promise<IPerson> => {
  const res = await fetch(`http://localhost:4000/posts/${id}`);

  if(res.ok) {
    return res.json();
  }

  throw new Error("error feftching user by id");
}

const PagePersonDetail: FC = () => {
  const {id} = useParams();
  const { isLoading, isError, error, data } = useQuery<IPerson, Error>(['person', id], () => getPersonById(id), {
    enabled: !!id
  })

  if(isLoading) return <h1>Loading...</h1>

  if(isError) return <h1>Boom boy: Error is -- {error?.message}</h1>

  return(
    <div>
      <Link to={'/project4'}>Home Person</Link>
      <h1>Detail Person</h1>
      <p>{data?.id}</p>
      <p>{data?.name}</p>
      <p>{data?.age}</p>
    </div>
  ) 
}

export default PagePersonDetail;