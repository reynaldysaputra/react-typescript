import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function User() {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    if(userContext){
      userContext.setUser({
        name: 'Reynaldy',
        email: 'renalfrontend@gmail.com'
      })
    }
  }

  const handleLogout = () => {
    if(userContext){
      userContext.setUser(null)
    }
  }

  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2>User name is {userContext.user?.name}</h2>
      <h2>User name is {userContext.user?.email}</h2>
    </div>
  )
}

export default User;