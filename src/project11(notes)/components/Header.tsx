import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Header: React.FC = (props) => {
    return (
        <Navbar fixed="top" bg='dark' variant="dark">
            <Container>
                <Navbar.Brand>
                    React TypeScript Bootstrap Tutorial
                </Navbar.Brand>
            </Container>
      </Navbar>
  );
};

export default Header;