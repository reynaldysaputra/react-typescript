type PersonListProps = {
  names: {
    first: string
    last: string
  }[]
}

export function PersonList(props: PersonListProps) {
  return(
    <div>
      {props.names.map(name => (
        <h2 key={name.first}>{name.first} {name.last}</h2>
      ))}
    </div>
  )
}