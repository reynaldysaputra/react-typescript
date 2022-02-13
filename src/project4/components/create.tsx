import React, { FC, FormEventHandler } from 'react';
import { useMutation, UseMutationResult, useQuery, useQueryClient, UseQueryResult } from 'react-query';
import { IPerson } from '../lib/interfaces/IPerson';

const createPerson = async (id: number, name: string, age: number): Promise<IPerson> => {
  const res: Response = await fetch('http://localhost:4000/posts', {
    method: 'POST',
    body: JSON.stringify({
      id,
      name,
      age,
    }),
  });

  if (!res.ok) {
    throw new Error('Error create person');
  }

  return res.json();
};

interface ICreatePersonParams {
  id: number;
  name: string;
  age: number;
}

const CreatePage: FC = () => {
  const queryClient = useQueryClient();

  const mutation: UseMutationResult<IPerson, Error, ICreatePersonParams> = useMutation<
    IPerson,
    Error,
    ICreatePersonParams
  >(async ({ id, name, age }) => createPerson(id, name, age), {
    // before mutation
    onMutate: (data: ICreatePersonParams) => {
      console.log(data)
    },
    // on success of mutation
    onSuccess: () => {

    },
    // if mutation errors
    onError: (error: Error, _variables: ICreatePersonParams) => {

    },
    // no matter if error or success run me
    onSettled: (
      _data: IPerson | undefined,
      _error: Error | null,
      _variables: ICreatePersonParams | undefined,
    ) => {
      
    },
  });

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      age: { value: number };
    };
    const name = target.name.value;
    const age = target.age.value;
    console.log(name)
    mutation.mutate({ id: parseInt("3"), name, age });
  };

  return (
    <>
      {mutation.isLoading ? (
        <p>Adding todo</p>
      ) : (
        <>
          {mutation.isError ? <div>An error occurred: {mutation?.error?.message}</div> : null}

          {mutation.isSuccess ? (
            <div>
              Todo added! Person name is {mutation?.data?.name} and he is {mutation?.data?.age}
            </div>
          ) : null}
        </>
      )}

      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <label htmlFor="age">Age:</label>
        <br />
        <input type="number" id="age" name="age" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default CreatePage;