type ContainerProps = {
  style: React.CSSProperties,
  children: React.ReactNode
}

export function Container(props: ContainerProps){
  return(
    <div style={props.style}>
      {props.children}
    </div>
  )
}