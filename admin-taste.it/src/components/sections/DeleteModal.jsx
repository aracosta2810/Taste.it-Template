import axios from "axios";

const DeleteModal = ({ currentData, url, setData, setToast }) => {
  const handleDeleteData = async () => {
    let ids = [];

    currentData.forEach((item) => {
      ids.push(item.id);
    });

    setData(null);

    axios
      .post(url, { ids: [...ids] }, {headers:  {'Authorization' : 'Bearer '+localStorage.getItem('token')}})
      .then((res) => {
        if (res.data.success) {
          setToast(true)
          setTimeout(() => setToast(false), 3000)
        }
        if(res.data.data.length === 0) {
          setData([])
          return
        }
        let newData = res.data.data;

        newData.forEach((item) => {
          if(item.offers !== undefined){
            item.offers.forEach((item2) => {
              item2.isSelected = false;
            });
          }else {
            item.isSelected = false
          }
        });
        setData(newData);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div
      className="modal fade show pt-5"
      id="modal-deleteModal"
      style={{ display: "block", paddingRight: "12px" }}
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">
              Delete {currentData.length}{" "}
              {currentData.length === 1 ? "element" : "elements"}{" "}
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
              onClick={() => handleDeleteData()}
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

export default DeleteModal;
