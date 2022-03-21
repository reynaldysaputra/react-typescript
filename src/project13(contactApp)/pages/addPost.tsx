import * as React from 'react';
import Navbar from '../components/navbar';

interface IAddPostProps {
}

const AddPost: React.FunctionComponent<IAddPostProps> = (props) => {
  return(
    <div>
      <Navbar/>
      <div className="container-fluid">
        <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
        <div className="row">
          <div className="col-md-6 p-5 mx-auto shadow">
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Full name"
//                   value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="number"
                  placeholder="Phone"
                  // value={phone}
                  // onChange={(e) => setPhone(e.target.value)}
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
