import { useState } from "react";
import { Link } from "react-router-dom";

const AppBar = ({ user, setUser, setIsLogin }) => {
  
  function handleLogOut() {
    localStorage.clear();
    setUser(null)
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
            <Link className="dropdown-item" to={'edit-profile'} >
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
            </Link>
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
