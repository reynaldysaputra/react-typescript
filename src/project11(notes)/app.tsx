import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreateNotes from './components/CreateNotes';
import Headers from './components/Header';
import NoteList from './components/NoteList';

export interface Note {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

function NotesApp(){
  const [notes, setNotes] = useState<Note[]>([]);

  return(
    <div>
      <Headers/>
      <Container className='mt-5'>
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes setNotes={ setNotes}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NotesApp;