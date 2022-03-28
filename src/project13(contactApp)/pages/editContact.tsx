import * as React from 'react';
import { useNavigate, useParams } from "react-router-dom";

interface IEditContactProps {
}

const EditContact: React.FunctionComponent<IEditContactProps> = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

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
          {/* {currentContact ? ( */}
            {/* <form onSubmit={handleSubmit}> */}
            <form>
              <div className="form-group">
                <input
                  className="form-control"
                  // value={name}
                  placeholder={"Name"}
                  // onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  // value={email}
                  placeholder={"Email"}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  // value={phone}
                  placeholder={"Phone"}
                  // onChange={(e) => setPhone(e.target.value)}
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
          {/* ) : (
            <h1 className="text-center">No Contact Found</h1>
          )} */}
        </div>
      </div>
    </div>
  )
};

export default EditContact;
