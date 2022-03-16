import React from 'react';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import User from './components/User';
import { ThemeContextProvider } from './context/ThemeContext';
import { UserContextProvider } from './context/UserContext';
import CustomButton from './customComponent/Button';
import { Toast } from './templateLiteral/Toast';

function Project10() {
  const personName = {
    first: 'Ady',
    last: 'Setiawan'
  }

  const nameList = [
    {
      first: 'Zikri',
      last: 'Saputra'
    },
    {
      first: 'Fery',
      last: 'Setiawan'
    },
    {
      first: 'Muhammad',
      last: 'Febriansyah'
    }
  ]

  return(
    <ThemeContextProvider>
      <UserContextProvider>
        <Greet name='Reynaldy' messageCount='15' isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status='success' />
        <Oscar>
          <Heading>Oscar goes to American!</Heading>
        </Oscar>
        <Container style={{border: '1px solid red', padding: '1rem'}}>
          <h4>Hello word</h4>
        </Container>
        <User/>
        <Toast position='center' />
        <CustomButton variant='primary'>Primary Button</CustomButton>
      </UserContextProvider>
    </ThemeContextProvider>
  )
}

export default Project10;