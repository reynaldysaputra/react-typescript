import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from '../states/store';
import { EditContact } from '../states/actions/contact';

interface IEditContactProps {
}

const EditContactPage: React.FunctionComponent<IEditContactProps> = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {dataContact} = useSelector((state: RootState) => state.contact);
  const currentContact = dataContact.find(contact => contact.id === id);
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if(currentContact){
      setName(currentContact.name);
      setEmail(currentContact.email);
      setPhone(currentContact.phone);
    }
  }, [currentContact])

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    const checkContactEmailExists = dataContact.filter((contact) =>
      contact.email === email && contact.id !== currentContact?.id
        ? contact
        : null
    );
    const checkContactPhoneExists = dataContact.filter((contact) =>
      contact.phone === phone && contact.id !== currentContact?.id
        ? contact
        : null
    );

    if(!email || !phone || !name){
      return alert("Please fill in all fields!");
    }

    if(checkContactEmailExists.length > 0) {
      return alert("This email already exists!!");
    }
    if(checkContactPhoneExists.length > 0) {      
      return alert("This phone number already exists!!");
    }

    dispatch(EditContact({
      id: `${id}`,
      name,
      email,
      phone
    }))

    navigate('/project13');
    alert("Contact updated successfully!!");
  }

  return(
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
          onClick={() => navigate('/project13')}
        >
          Go back
        </button>
        <div className="col-md-6 mx-auto shadow p-5">
          {currentContact ? (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  value={name}
                  placeholder={"Name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={email}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  value={phone}
                  placeholder={"Phone"}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  // onClick={() => history.push("/")}
                >
                  cancel
                </button>
              </div>
            </form>
          ) : (
            <h1 className="text-center">No Contact Found</h1>
          )}
        </div>
      </div>
    </div>
  )
};

export default EditContactPage;
