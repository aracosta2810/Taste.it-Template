import axios from "axios";
import { useState } from "react";

const NewAdminForm = ({setData}) => {
  const [toast, setToast] = useState(false)
  const [name, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirmation] = useState('')
  const [email, setEmail] = useState('')

  function handleCreate(e) {
    e.preventDefault()
    const token = localStorage.getItem('token')
    
    // console.log({
    //   headers: {
    //     'Authorization' : `Bearer ${token}`
    //   },
    //   data : {
    //     user: name, password, password_confirmation, email
    //   }
    // });

    axios.post(window.urlServer + 'admin/register', 
      {name, password, password_confirmation, email}, 
      {headers: {'Authorization' : `Bearer ${token}`}}
    ).then(res => {
      if (res.data.success) {
        setToast(true)
        setTimeout(() => setToast(false), 3000)
      }

      setData(res.data.data)
    })
    .catch(e => console.log(e))

    // cleanFields()
  }

  function cleanFields() {
    const setStates = [setUser, setPassword, setPasswordConfirmation, setEmail]

    setStates.forEach(item => item(''))
  }

  return (
    <div
      className="modal fade show pt-5"
      id="modal-NewAdminModal"
      style={{ display: "block", paddingRight: "12px" }}
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content p-2">
          {/* ------------------------------ */}
          <div className="d-flex justify-content-between align-items-center px-4 mb-3">
            <h3 className="m-0">New Admin</h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form className="p-2" onSubmit={(e) => handleCreate(e)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password(min-6 characters)"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword(min-6 characters)"
                placeholder="Password"
                required
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* /.card-body */}
            <div className="card-footer mt-0 bg-white">
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </form>

          {
            toast?
              <div id="toastsContainerTopRight" className="toasts-top-right fixed">
                <div className="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
                  <div className="toast-header"><strong className="mr-auto">Info</strong>
                    <button onClick={() => setToast(false)} data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close"><span aria-hidden="true">×</span></button>
                  </div>
                  <div className="toast-body">
                    Admin created successfully
                  </div>
                </div>
              </div>
            :
              null
          }

          {/* ------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default NewAdminForm;
