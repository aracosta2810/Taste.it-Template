import axios from "axios";

const MessageModal = ({ currentData }) => {
  const handleDeleteData = () => {
    // ! Hacer esto despues, empaquetar la infrmacion y tal. Falta el token
    axios
      .delete(`/contact/destroy/${currentData.id}`, { token: {} })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <div
      className="modal fade show pt-5"
      id="modal-MessageModal"
      style={{ display: "block", paddingRight: "12px" }}
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">{currentData.name}</h3>
              <span className="mailbox-read-time float-right">
                {currentData.date + "   " + currentData.time}
              </span>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="mailbox-read-info">
                <h5>
                  <b>Subject: </b>
                  {currentData.subject}
                </h5>
                <h6>From: {currentData.email}</h6>
              </div>
              {/* /.mailbox-read-info */}
              {/* /.mailbox-controls */}
              <div className="mailbox-read-message">{currentData.message}</div>
              {/* /.mailbox-read-message */}
            </div>

            {/* /.card-footer */}
            <div className="card-footer">
              <div className="float-right"></div>
              <button
                onClick={handleDeleteData}
                type="button"
                className="btn btn-default"
              >
                <i className="far fa-trash-alt" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
