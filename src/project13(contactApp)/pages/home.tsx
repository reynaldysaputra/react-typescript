import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHomeProps {

}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return(
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Contact
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover">
            <thead className="table-header bg-dark text-white">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {/* {contacts.length > 0 ? (
                contacts.map((contact, id) => ( */}
                  <tr key={2}>
                    <td>3</td>
                    <td>Reynaldy Saputra</td>
                    <td>renalfrontend@gmail.com</td>
                    <td>089607266532</td>
                    <td>
                      <Link
                        // to={`/edit/${contact.id}`}
                        to={'/project13/edit/2'}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        // onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                {/* ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default Home;
