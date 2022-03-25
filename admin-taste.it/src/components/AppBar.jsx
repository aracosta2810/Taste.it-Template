import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

const AppBar = ({ user, setIsLogin }) => {
  const [modal, setModal] = useState(false)
  
  function handleLogOut() {
    localStorage.clear();
    setIsLogin(false);
  }

  return (
    <nav className="main-header navbar navbar-expand border-bottom-0 navbar-light d-flex justify-content-between">
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            className="nav-link "
            data-widget="pushmenu"
            href="/"
            role="button"
          >
            <i className="fas fa-bars " />
          </a>
        </li>
        {/* <li className="nav-item d-none d-sm-inline-block">
              <a href="/" className="nav-link">
                Home
              </a>
            </li> */}
           <button onClick={(e) => setModal(true)} data-toggle="modal" data-target="#modal-EditProfileModal" type="button" className="btn btn-default btn-sm"><i className="far fa-trash-alt" /></button>
      </ul>

      {/* -----------User section---------- */}
      <ul className="navbar-nav ml-auto d-flex align-items-center pr-3">
        <li className="nav-item dropdown" style={{cursor:'pointer'}}>
          <div className="nav-link" data-toggle="dropdown">
            <span className="pb-1 mr-2">{user.name}</span>
            <i className="fa fa-user-alt" style={{ fontSize: "1.3rem" }} />
          </div>
          {/* Dropdown menu */}
          <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
            <div className="dropdown-item" onClick={() => setModal(true)} data-toggle="modal" data-target="#modal-deleteModal">
              <div className="media">
                <div className="media-body">
                  <p className="dropdown-item-title d-flex justify-content-between align-items-center">
                    Edit profile
                    <i
                      className="fa fa-edit text-muted"
                      style={{ fontSize: "1.3rem" }}
                    ></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="dropdown-divider" />
            <div className="dropdown-item" onClick={() => handleLogOut()}>
              <div className="media" >
                <div className="media-body">
                  <p className="dropdown-item-title d-flex justify-content-between align-items-center">
                    Log out
                    <i
                      className="fa fa-sign-out-alt text-muted"
                      style={{ fontSize: "1.3rem" }}
                    ></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default AppBar;
