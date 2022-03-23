import axios from "axios";
import { useState, useEffect } from "react";

const EditOffertModal = ({currentData}) => {
  const [type, setType] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [isEspecial, setIsEspecial] = useState(false)
  const [urlPhoto, setUrlPhoto] = useState('')
  const [file, setFile] = useState('')
  const [info, setInfo] = useState(0)

  useEffect(() => {
    setType(currentData.type)
    setName(currentData.title)
    setPrice(currentData.price)
    setIsEspecial(currentData.is_especial === 1? true: false)
    setUrlPhoto(currentData.url_photo)
    setInfo(currentData.info)
  }, [currentData])
  
  const handleEditData = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target)
    formData.set('is_especial', formData.get('is_especial') === 'on'? 1 : 0)

    // ! Hacer esto despues, empaquetar la infrmacion y tal. Empaquetar el token
    axios.put(`${window.urlServer}/offer/update/${currentData.id}`,formData)
    .then(res => console.log(res))
    .catch(e => console.log(e))
  };

  const handleChangePhoto = (file) => {
    setFile(file)
    setUrlPhoto(file.name)
  }

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
          <form onSubmit={(e) => handleEditData(e)} className="modal-body" encType="multipart">
            <div className="form-group">
                <label>Section</label>
                <select name="type" onChange={(e) => setType(e.target.value)} className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} data-select2-id={1} tabIndex={-1} aria-hidden="true">
                  <option selected={currentData.type.toLowerCase() === 'breakfast'? true : false} data-select2-id={33}>Breakfast</option>
                  <option selected={currentData.type.toLowerCase() === 'lunch'? true : false} data-select2-id={34}>Lunch</option>
                  <option selected={currentData.type.toLowerCase() === 'dinner'? true : false} data-select2-id={35}>Dinner</option>
                  <option selected={currentData.type.toLowerCase() === 'desserts'? true : false} data-select2-id={36}>Desserts</option>
                  <option selected={currentData.type.toLowerCase() === 'wine card'? true : false} data-select2-id={37}>Wine Card</option>
                  <option selected={currentData.type.toLowerCase() === 'drinks & tea'? true : false} data-select2-id={38}>Drinks {'&'} Tea</option>
                </select>
              </div>
            <div className="form-group">
              <label htmlFor="inputName">Name</label>
              <input type="text" name="title" className="form-control" onChange={(e) => setName(e.target.value)} value={name}/>
            </div>
            <div className="form-group">
              <label htmlFor="inputClientCompany">Price</label>
              <div className="d-flex align-items-center">
                <input
                  type="number"
                  name="price"
                  className="form-control w-25"
                  onChange={(e) => setPrice(e.target.value)} 
                  value={price}
                />
                <div className="form-check ml-4">
                  <input
                    type="checkbox"
                    className="form-check-input "
                    name="is_especial"
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
                <input type="file" name="photo" accept="image/*" onChange={(e) => handleChangePhoto(e.target.files[0])} className="custom-file-input" id="exampleInputFile" />
                <label className="custom-file-label overflow-hidden" htmlFor="exampleInputFile">{urlPhoto}</label>
              </div>
            </div>
            <div className="form-group mt-3">
              <label htmlFor="inputDescription">Description</label>
              <br />
              <input type="text" name="description" className="form-control mb-2" onChange={(e) => setInfo(e.target.value)} value={info}/>
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
