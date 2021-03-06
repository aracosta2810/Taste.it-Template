import { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../DeleteModal";
import MessageModal from "./MessageModal";
import Toast from "../../Toast";

const Messages = () => {
  const [toast, setToast] = useState(false)
  const [data, setData] = useState(null); // esto va null
  const [currentData, setCurrentData] = useState({})
  const [messageModal, setMessageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    let newData = [...data.filter((item) => item.isSelected === true)]
    setCurrentData(newData)
  };

  useEffect(() => {
    axios.get(`${window.urlServer}contact`, {headers: {'Authorization' : 'Bearer '+localStorage.getItem('token')}})
      .then((res) => {
        if(res.data.length === 0) {
          setData([])
          return
        }

        let data = res.data
        
        data.forEach(item => item.isSelected = false)
        setData(data)
      })
      .catch((e) => console.log("Error " + e));
    }, []);

  const handleViewMessageModal = (id) => {
    setMessageModal(true);
    setCurrentData(...data.filter((item) => item.id === id));
  }

  const handleSelect = (id, selectAll) => {
    let newData = []
    let allSelect = false;

    if (selectAll) {
      data.forEach(item =>{
        if (item.isSelected === false) {
          allSelect = true
        }
      })

      switch (allSelect) {
        case true:
          data.forEach(item => {
            item.isSelected = true;
            newData.push(item)
          })
          break;

        case false:
          data.forEach(item => {
            item.isSelected = false;
            newData.push(item)
          })
          break;
      
        default:
          break;
      }
    }else{
      data.forEach(item => {
        if (item.id === id) item.isSelected = !item.isSelected
        newData.push(item)
      })
    }
    
    setData(newData);
  }; 
  
  return (
    <div
      className="tab-pane text-left fade show active py-4"
      id="vert-tabs-home"
      role="tabpanel"
      aria-labelledby="vert-tabs-home-tab"
    >
      {data === null ? (
        <div
          className="d-flex justify-content-center mt-5"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="fas fa-2x fa-sync-alt fa-spin mt-5"></i>
        </div>
      ) : data.length === 0? 
          <h2 className="mt-4 text-center">There are no messages</h2>
        :(
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title">Inbox</h3>
            
            {/* /.card-tools */}
          </div>
          {/* /.card-header */}
          <div className="card-body p-0">
            <div className="mailbox-controls ml-3 ml-sm-0">
              {/* Check all button */}
              <button onClick={() => handleSelect(null, true)} type="button" className="btn btn-default btn-sm checkbox-toggle">
                <i className="far fa-check-square" />
              </button>
              <div className="btn-group">
                <button 
                  onClick={(e) => handleDeleteModal()} 
                  data-toggle="modal" 
                  data-target="#modal-deleteModal" 
                  type="button" 
                  className="btn btn-default btn-sm"
                  disabled={data.filter(item => item.isSelected).length === 0}
                >
                  <i className="far fa-trash-alt" />
                </button>
              </div>
              {/* /.btn-group */}
              <div className="float-right">
                1-50/200
                <div className="btn-group">
                  <button type="button" className="btn btn-default btn-sm"><i className="fas fa-chevron-left" /></button>
                  <button type="button" className="btn btn-default btn-sm"><i className="fas fa-chevron-right" /></button>
                </div>
                {/* /.btn-group */}
              </div>
              {/* /.float-right */}
            </div>
            <div className="table-responsive mailbox-messages">
              <table className="table table-hover table-striped">
                <tbody >
                  {
                    data.map((item)=>
                      <tr 
                        key={item.id} 
                        className='d-flex justify-content-between  align-items-center'
                      >
                        <td className="pr-0 d-flex align-items-center">
                          <button
                            onClick={()=> handleViewMessageModal(item.id)} 
                            className="btn btn-dark p-0 px-1 mr-2"
                            data-toggle="modal"
                            data-target="#modal-MessageModal"
                          >
                            <i className="fas fa-eye" style={{fontSize:'15px'}} />
                          </button>
                          <input type="checkbox" defaultValue checked={item.isSelected} onChange={(e) => handleSelect(item.id, false)} id={item.id} />
                        </td>
                        {/* <td className="mailbox-name"></td> */}
                        <td className="mailbox-name">{item.name}</td>
                        <td className="mailbox-subject d-none d-md-block">{item.email}</td>
                        <td className="mailbox-date" style={{fontSize:'0.8rem'}}>{item.date}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
              {/* /.table */}
            </div>
            {/* /.mail-box-messages */}
          </div>
          {/* /.card-body */}
          <div className="card-footer p-0">
            <div className="mailbox-controls ml-3 ml-sm-0">
              {/* Check all button */}
              <button onClick={() => handleSelect(null, true)} type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="far fa-check-square" />
              </button>
              <div className="btn-group">
                <button onClick={(e) => handleDeleteModal()} data-toggle="modal" data-target="#modal-deleteMessageModal" type="button" className="btn btn-default btn-sm"><i className="far fa-trash-alt" /></button>
              </div>
              {/* /.btn-group */}
              <div className="float-right">
                1-50/200
                <div className="btn-group">
                  <button type="button" className="btn btn-default btn-sm"><i className="fas fa-chevron-left" /></button>
                  <button type="button" className="btn btn-default btn-sm"><i className="fas fa-chevron-right" /></button>
                </div>
                {/* /.btn-group */}
              </div>
              {/* /.float-right */}
            </div>
          </div>
        </div>
       )}
      {deleteModal? <DeleteModal currentData={currentData} setToast={setToast} setData={setData} url={`${window.urlServer}contact/delete`} /> : null}
      {messageModal? <MessageModal currentData={currentData} setData={setData}/> : null}

      {
        toast?
          <Toast setToast={setToast} message={'Message(s) deleted successfully'}/>
        :
          null
      }
    
    </div>
  );
};

export default Messages;