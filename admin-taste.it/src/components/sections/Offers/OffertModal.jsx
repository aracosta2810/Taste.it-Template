const OffertModal = ({currentData}) => {
    return (
        <div className="modal fade show pt-2" id="modal-offertModal" style={{display: 'block', paddingRight: '12px'}} aria-modal="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div>
                  <h4 className="modal-title">
                    <i className="fas fa-star mr-2" style={{color: currentData.is_especial === 1? 'yellow' : 'gray'}} />
                    {currentData.title} 
                  </h4>
                  <div className="text-muted" style={{fontSize:'0.8rem'}}>{currentData.description}</div>
                </div>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={currentData.photo} alt="" width={'100%'} srcSet="" />
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
    );
}

export default OffertModal;