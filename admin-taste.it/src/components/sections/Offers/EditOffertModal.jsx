import axios from "axios";
import { useState, useEffect } from "react";

const EditOffertModal = ({currentData}) => {
  const [nameField, setNameField] = useState('')
  const [priceField, setPriceField] = useState(0)
  const [isEspecial, setIsEspecial] = useState(false)
  const [file, setFile] = useState('')
  const [descriptionField, setDescriptionField] = useState(0)

  useEffect(() => {
    setNameField(currentData.title)
    setPriceField(currentData.price)
    setIsEspecial(currentData.is_especial === 1? true: false)
    setFile(currentData.photo)
    setDescriptionField(currentData.description)
  }, [currentData])
  
  const handleEditData = async (e) => {
    e.preventDefault();

    const data = {
      title: nameField,
      price: priceField,
      // photo: file,
      is_especial: isEspecial? 1 : 0,
      description: descriptionField,
      type:'Lunch',
      token: ''
  }
  
    // ! Hacer esto despues, empaquetar la infrmacion y tal. Empaquetar el token
    axios.put(`${window.urlServer}/offer/update/${currentData.id}`,data)
    .then(res => console.log(res))
    .catch(e => console.log(e))
  };

  return (
    <div
      className="modal fade show"
      id="modal-editOffertModal"
      style={{ display: "block", paddingRight: "12px" }}
      aria-modal="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Edit offer</h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <form onSubmit={(e) => handleEditData(e)} className="modal-body">
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" id="inputName" className="form-control" onChange={(e) => setNameField(e.target.value)} value={nameField}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputClientCompany">Price</label>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  id="priceField"
                  className="form-control w-25"
                  onChange={(e) => setPriceField(e.target.value)} 
                  value={priceField}
                />
                <div className="form-check ml-4">
                  <input
                    type="checkbox"
                    className="form-check-input "
                    id="exampleCheck1"
                    onChange={(e) => setIsEspecial(e.target.checked)} 
                    checked = {isEspecial}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Special offer
                  </label>
                </div>
              </div>
            </div>
            <div className="input-group">
              <div className="custom-file">
                <input type="file"  accept="image/*" onChange={(e) => setFile(e.target.files[0])} className="custom-file-input" id="exampleInputFile" />
                <label className="custom-file-label" htmlFor="exampleInputFile">{file.name}</label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="inputDescription">Description</label>
              <br />
              <input type="text" className="form-control mb-2" onChange={(e) => e.target.files.length === 0? '' : setFile(e.target.files[0])} value={descriptionField}/>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-success">
                <i className="fas fa-save mr-2" />
                Save
              </button>    
            </div>
          </form>
        </div>
        {/* /.modal-content */}
      </div>
      {/* /.modal-dialog */}
    </div>
  );
};

export default EditOffertModal;
