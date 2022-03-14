type GreetProps = {
  name: string
  messageCount: string
  isLoggedIn: boolean
}

export function Greet(props: GreetProps) {
  return(
    <div>
      <h2>
        {props.isLoggedIn 
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages`
          : 'Welcome Guest'
        }
      </h2>
    </div>
  )
}