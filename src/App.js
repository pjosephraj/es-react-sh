import './App.css';
import {useState} from "react";

function App () {
  const [editTab, setEditTab] = useState(true);

  const onClickNavItem = () => {
    setEditTab((isActive) => {
      return !isActive;
    });
  }

  return (
    <div className="App">
      <div className="container-wrap">
        <div className="container">
          <nav className="es-nav">
            <ul>
              <li className={editTab ? 'active' : ''}>
                <button onClick={onClickNavItem} className="es-nav-item">Edit</button>
              </li>
              <li className={editTab ? '' : 'active'}>
                <button onClick={onClickNavItem} className="es-nav-item">Preview</button>
              </li>
            </ul>
          </nav>
          <main>
            {editTab ? (
              <div className="edit-wrapper">
                <form action="">
                  <div className="form-control">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName"/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName"/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="designation">Designation</label>
                    <input type="text" id="designation"/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="phone" id="phoneNumber"/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="linkedIn">LinkedIn Username</label>
                    <input type="text" id="linkedIn"/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="linkedInURL">LinkedIn Link</label>
                    <input type="text" id="linkedInURL"/>
                  </div>
                </form>
              </div>
            ) : (
              <div className="preview wrapper">
                Preview Wrapper
              </div>
            ) }
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
