const EditProfileModal = ({ data }) => {

  function handleEditProfile() {}

  return (
    <div
      className="modal fade show pt-5"
      id="modal-EditProfileModal"
      style={{ display: "block", paddingRight: "12px" }}
      aria-modal="true"type="button"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Edit profile
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              This action has not return. Are you sure you want to continue?
            </p>
          </div>
          <div className="modal-footer justify-content-end">
            <button
            //   onClick={() => handleEditProfile()}
              type="button"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
};

export default EditProfileModal;
