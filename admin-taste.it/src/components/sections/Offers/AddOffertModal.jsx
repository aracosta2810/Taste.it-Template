import axios from "axios";
import { useState } from "react";

const AddOffertModal = ({ setData }) => {
  const [toast, setToast] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [isEspecial, setIsEspecial] = useState(false);
  const [file, setFile] = useState("");
  const [info, setInfo] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if(file === '') return

    let formData = new FormData(e.target);
    formData.set("is_especial", formData.get("is_especial") === "on" ? 1 : 0);

    setData(null);
    axios
      .post(`${window.urlServer}offer/create`, formData, {headers:{'Authorization' : 'Bearer ' + localStorage.getItem('token')}})
      .then((res) => {
        if (res.data.success) {
          setToast(true)
          setTimeout(() => setToast(false), 3000)
        }
        console.log(res
          );
        let newData = res.data.data;

        newData.forEach((item) => {
          item.offers.forEach((item2) => {
            item2.isSelected = false;
          });
        });
        setData(newData);
        cleanFields()
      })
      .catch((e) => console.log(e));
  };

  const cleanFields = () => {
    setTitle("");
    setPrice(0);
    setFile('')
    setIsEspecial(false);
    setInfo("");
  };

  return (
    <div
      className="modal fade show"
      id="modal-addOffertModal"
      style={{ display: "block", paddingRight: "12px" }}
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Add offer</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form
            id="form"
            onSubmit={(e) => handleAdd(e)}
            className="modal-body"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label>Section</label>
              <select
                name="type"
                className="form-control select2 select2-hidden-accessible"
                style={{ width: "100%" }}
                data-select2-id={1}
                tabIndex={-1}
                aria-hidden="true"
              >
                <option data-select2-id={33}>Breakfast</option>
                <option data-select2-id={34}>Lunch</option>
                <option data-select2-id={35}>Dinner</option>
                <option data-select2-id={36}>Desserts</option>
                <option data-select2-id={37}>Wine Card</option>
                <option data-select2-id={38}>Drinks {"&"} Tea</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="title"
                type="text"
                id="inputName"
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                required
                value={title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <div className="d-flex align-items-center">
                <input
                  name="price"
                  type="number"
                  min={0}
                  id="inputClientCompany"
                  className="form-control w-25"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
                <div className="form-check ml-4">
                  <input
                    name="is_especial"
                    type="checkbox"
                    className="form-check-input "
                    id="exampleCheck1"
                    onChange={(e) => setIsEspecial(e.target.checked)}
                    checked={isEspecial}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Special offer
                  </label>
                </div>
              </div>
            </div>
            <div className="input-group">
              {/* --------------file------------- */}
              <div className="custom-file">
                <input
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={(e) =>e.target.files.length === 0? "": setFile(e.target.files[0])}
                  className="custom-file-input"
                  id="exampleInputFile"
                  required
                />
                <label className="custom-file-label" htmlFor="photo">
                  {file.name}
                </label>
              </div>
            </div>
            <div className="form-group mt-3" id="descriptionFields">
              <label htmlFor="info">Description</label>
              <br />
              <input
                name="description"
                type="text"
                className="form-control mb-2"
                onChange={(e) => setInfo(e.target.value)}
                value={info}
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-dark mr-2"
                onClick={() => cleanFields()}
              >
                <i className="fas fa-eraser mr-2" />
                Clean
              </button>
              <button
                type="submit"
                className="btn btn-info"
              >
                <i className="fas fa-plus mr-2" />
                Add
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
                    Offer created successfully
                  </div>
                </div>
              </div>
            :
              null
          }
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
};

export default AddOffertModal;
