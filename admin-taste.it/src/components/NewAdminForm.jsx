const NewAdminForm = () => {
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
          <h3>New Admin</h3>
          <form className="p-2">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>
            {/* /.card-body */}
            <div className="card-footer mt-0">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
          {/* ------------------------------ */}
        </div>
      </div>
    </div>
  );
};

export default NewAdminForm;
