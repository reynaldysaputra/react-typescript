import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Navbar from '../components/navbar';
import { AddContact } from '../states/actions/contact';
import { RootState } from '../states/store';

interface IAddPostProps {
}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const {dataContact} = useSelector((state: RootState) => state.contact);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const checkEmail = dataContact.find(contact => contact.email === email && email);
    // const checkPhone = dataContact.find(contact => contact.phone === phone && phone);

    if(!email || !phone || !name){
      return alert("Please fill in all fields!");
    }

    // if(checkEmail) {
    //   return alert("This email already exists!!");
    // }
    // if(checkPhone) {      
    //   return alert("This phone number already exists!!");
    // }

    dispatch(AddContact({
      id: new Date().getTime().toLocaleString(),
      email,
      phone
    }))
}

  return(
    <div>
      <Navbar/>
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
        <div className="row">
          <div className="col-md-6 p-5 mx-auto shadow">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {console.log(dataContact)}
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="btn btn-block btn-dark"
                  type="submit"
                  value="Add Student"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddPost;
