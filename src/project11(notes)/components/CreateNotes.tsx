import React from 'react';
import Button from 'react-bootstrap/Button'
import { Note } from '../app';
import { Alert, Form } from 'react-bootstrap';

interface ICreateNotesProps {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({setNotes}) => {
  const [error, setError] = React.useState("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All fields are mandatory");
    }

    setError("");
    setNotes(notes => [...notes, {
        id: (new Date()).toString(),
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
    }]);
    
    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";
  }

  return(
    <div>
      <h2>Create Notes</h2>
      {console.log('Create Notes')}
      {error && <Alert variant="danger">{ error}</Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Title for the Note" ref={ titleRef }/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Text</Form.Label>
              <Form.Control placeholder="Enter your notes" as="textarea" rows={3} ref={ textRef }/>
          </Form.Group>
          <Form.Group className="mb-3">
              <Form.Label htmlFor="colorInput">Notes Color</Form.Label>
              <Form.Control type="color" id="colorInput" defaultValue="#dfdfdf" title="Choose your color" ref={ colorRef }/>
          </Form.Group>
          <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </div>
  )
};

export default CreateNotes;
