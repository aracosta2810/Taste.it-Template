import axios from "axios";
import { useState } from "react";

const AddOffertModal = () => {
  //! Falta el de subir foto
  const [nameField, setNameField] = useState('')
  const [priceField, setPriceField] = useState(0)
  const [isEspecial, setIsEspecial] = useState(false)
  const [descriptionField, setDescriptionField] = useState('')

    const handleAdd = (e) => {
      e.preventDefault();
      // ! Hacer esto despues, empaquetar la infrmacion y tal. Empaquetar el token
      axios.post(`urlserver/offer/create/`,
        {
          title: nameField,
          price: priceField,
          url_photo: '',
          is_especial: isEspecial,
          description: descriptionField,
          token: {}
        }
      )
      .then(res => console.log(res))
      .catch(e => console.log(e))
    }

    const cleanFields = () => {
      setNameField('')
      setPriceField(0)
      setIsEspecial(false)
      setDescriptionField('')
    }

    return (
        <div className="modal fade show" id="modal-addOffertModal" style={{display: 'block', paddingRight: '12px'}} aria-modal="true">
         <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add offer</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form onSubmit={(e) => handleAdd(e)} className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" id="inputName" className="form-control" onChange={(e) => setNameField(e.target.value)} value={nameField} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputClientCompany">Price</label>
                  <div className="d-flex align-items-center">
                    <input type="number" id="inputClientCompany" className="form-control w-25" onChange={(e) => setPriceField(e.target.value)} value={priceField} />
                    <div className="form-check ml-4">
                      <input type="checkbox" className="form-check-input " id="exampleCheck1" onChange={(e) => setIsEspecial(e.target.checked)} checked = {isEspecial}/>
                      <label className="form-check-label" htmlFor="exampleCheck1">Special offer</label>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <div className="custom-file">
                  {/* Pendiente */}
                    <input type="file" className="custom-file-input" id="exampleInputFile" />
                    <label className="custom-file-label" htmlFor="exampleInputFile">Screenshot_2021-12-28_10-07-24.png</label>
                  </div>
                  <div className="input-group-append">
                    <span className="input-group-text" id>Upload</span>
                  </div>
                </div>
                <div className="form-group mt-3" id="descriptionFields">
                  <label htmlFor="inputDescription">Description</label>
                  <br />
                  <input type="text" className="form-control mb-2" onChange={(e) => setDescriptionField(e.target.value)} value={descriptionField}/>
                </div>
                <div  className="d-flex justify-content-end">
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
          </div>
          {/* /.modal-content */}
        </div>
        {/* /.modal-dialog */}
      </div>
    );
}

export default AddOffertModal;