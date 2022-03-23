import axios from "axios"

const DeleteModal = ({currentData, url, setData}) => {
      const handleDeleteData = async () => {
        let ids = []//Ver como organizar los ids para ver como mandarlos para el back

        currentData.forEach(item => {
          ids.push(item.id)
        });
        // console.log({ids: [...ids]});
        setData(null)

        // ! Hacer esto despues, empaquetar la infrmacion y tal. Falta el token. La url la pasan por parametros segun si es borrar mensajes u ofertas
        // axios.post(url, {ids: [...ids]})
        // .then(res => console.log(res))
        // .catch(e => console.log(e))
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
                  <p>This action has not return. Are you sure you want to continue?</p>
                </div>
                <div className="modal-footer justify-content-between">
                  <button onClick={() => handleDeleteData()} type="button" className="btn btn-danger" data-dismiss="modal">Delete</button>
                </div>
              </div>
              {/* /.modal-content */}
            </div>
            {/* /.modal-dialog */}
          </div>
        )
}

export default DeleteModal;