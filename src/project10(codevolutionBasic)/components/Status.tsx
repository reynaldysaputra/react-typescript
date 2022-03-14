type StatusProps = {
  status: 'loading' | 'error' | 'success'
}

export function Status(props: StatusProps){
  let message;

  if(props.status === 'loading') message = 'Loading...';
  else if(props.status === 'error') message = 'Error fetching data';
  else message = 'Data fetched succsesfully!';

  return(
    <div>
      <h2>Status - {message}</h2>
    </div>
  )
}