import axios from "axios"

const DeleteModal = ({currentData, url}) => {
      const handleDeleteData = () => {
        let dataToDelete = []//Ver como organizar los ids para ver como mandarlos para el back

        currentData.forEach(item => {
          dataToDelete.push(item.id)
        });
        

        // ! Hacer esto despues, empaquetar la infrmacion y tal. Falta el token. La url la pasan por parametros segun si es borrar mensajes u ofertas
        axios.delete(url,{ids: dataToDelete, token: {}})
        .then(res => console.log(res))
        .catch(e => console.log(e))
      }

        return (
          <div className="modal fade show pt-5" id="modal-deleteModal" style={{display: 'block', paddingRight: '12px'}} aria-modal="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Delete {currentData.length}  {currentData.length === 1? 'element' : 'elements'} </h4>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>Are you sure? This action has not return</p>
                </div>
                <div className="modal-footer justify-content-between">
                  <button onClick={() => handleDeleteData()} type="button" className="btn btn-danger" /*data-dismiss="modal"*/>Delete</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
        )
}

export default DeleteModal;