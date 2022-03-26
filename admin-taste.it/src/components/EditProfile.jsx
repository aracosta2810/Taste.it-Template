import axios from "axios";
import { useState } from "react";
import { useNavigate, useRoutes } from "react-router";

const EditProfile = ({ data, setUser }) => {
  const navigate = useNavigate()
  const [name, setName] = useState(data.name)
  const [old_password, setOldPass] = useState('')
  const [password, setPass] = useState('')
  const [password_confirmation, setPassConf] = useState('')

  function handleEditProfile(e) {
    e.preventDefault()


    axios.post(window.urlServer + 'admin/update', {name, old_password, password, password_confirmation},
      {
        headers: {'Authorization' : 'Bearer ' + localStorage.getItem('token')}
      }
    ).then(res => {
      if(res.data.success){
        navigate('/')
        setUser(res.data.user)
      }
    })
    .catch(e => console.log(e))

  }
  return (
    <div
      style={{
        zIndex: 1000000,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
      }}
    >
      <div className="hold-transition login-page">
        <i className="fa fa-user-edit fa-3x"></i>
        <div className="login-box">
          <div className="login-logo">
            <div >
              <b>Edit Profile</b>
            </div>
          </div>
          {/* /.login-logo */}
          <div className="card">
            <div className="card-body login-card-body">
              <form
                onSubmit={(e) => handleEditProfile(e)}
              >
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="user"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Old password(min-6 characters)"
                    value={old_password}
                    onChange={(e) => setOldPass(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password(min-6 characters)"
                    value={password}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password confirmation(min-6 characters)"
                    value={password_confirmation}
                    onChange={(e) => setPassConf(e.target.value)}
                    required
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" className="mr-1" id="remember" />
                    <label htmlFor="remember">Remeber me</label>
                  </div>
                </div> */}
                  {/* /.col */}
                  {/* <div className="col-4"> */}
                  <button type="submit" className="btn btn-primary btn-block">
                    Edit
                  </button>
                  <button type="button" onClick={() => navigate('/')} className="btn btn-secondary btn-block">
                    Cancel
                  </button>
                  {/* </div> */}
                  {/* /.col */}
                </div>
              </form>
              {/* /.social-auth-links */}
              {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p> */}
            </div>
            {/* /.login-card-body */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
