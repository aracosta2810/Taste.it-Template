import axios from "axios";
import { useState } from "react";

const AddOffertModal = () => {
  //! Falta el de subir foto
  const [type, setType] = useState('Breakfast')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [isEspecial, setIsEspecial] = useState(false)
  const [file, setFile] = useState('')
  const [description, setDescription] = useState('')

  console.log(type);

    const handleAdd = async (e) => {
      e.preventDefault();
      // ! Hacer esto despues, empaquetar la infrmacion y tal. Empaquetar el token
      // console.log(file);

      const data = {
        type: type,
        title: title,
        price: price,
        photo: file,
        is_especial: isEspecial,
        description: description,
        token: {}
      }

      console.log(data);

      axios.post(`${window.urlServer}/offer/create`,data)
      .then(res => console.log(res))
      .catch(e => console.log(e))
    }

    const cleanFields = () => {
      setTitle('')
      setPrice(0)
      setIsEspecial(false)
      setDescription('')
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
            <form onSubmit={(e) => handleAdd(e)} className="modal-body" encType="multipart">
                <div className="form-group">
                  <label>Section</label>
                  <select onChange={(e) => setType(e.target.value)} className="form-control select2 select2-hidden-accessible" style={{width: '100%'}} data-select2-id={1} tabIndex={-1} aria-hidden="true">
                    {/* <option selected="selected" data-select2-id={3}> </option> */}
                    <option data-select2-id={33}>Breakfast</option>
                    <option data-select2-id={34}>Lunch</option>
                    <option data-select2-id={35}>Dinner</option>
                    <option data-select2-id={36}>Desserts</option>
                    <option data-select2-id={37}>Wine Card</option>
                    <option data-select2-id={38}>Drinks {'&'} Tea</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input type="text" id="inputName" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="form-group">
                  <label htmlFor="inputClientCompany">Price</label>
                  <div className="d-flex align-items-center">
                    <input type="number" id="inputClientCompany" className="form-control w-25" onChange={(e) => setPrice(e.target.value)} value={price} />
                    <div className="form-check ml-4">
                      <input type="checkbox" className="form-check-input " id="exampleCheck1" onChange={(e) => setIsEspecial(e.target.checked)} checked = {isEspecial}/>
                      <label className="form-check-label" htmlFor="exampleCheck1">Special offer</label>
                    </div>
                  </div>
                </div>
                <div className="input-group">
                  <div className="custom-file">
                  {/* Pendiente */}
                    <input type="file"  accept="image/*" onChange={(e) => e.target.files.length === 0? '' : setFile(e.target.files[0])} className="custom-file-input" id="exampleInputFile" />
                    <label className="custom-file-label" htmlFor="exampleInputFile">{file.name}</label>
                  </div>
                </div>
                <div className="form-group mt-3" id="descriptionFields">
                  <label htmlFor="inputDescription">Description</label>
                  <br />
                  <input type="text" className="form-control mb-2" onChange={(e) => setDescription(e.target.value)} value={description}/>
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