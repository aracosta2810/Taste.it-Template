import { useState, useEffect } from "react";
import axios from "axios";
import DeleteModal from "../DeleteModal";
import MessageModal from "./MessageModal";

const testData = [
  {
    id: 1,
    name: "Marcelo",
    email: "example@gmail.com",
    subject: "Mala atención",
    message: "Se demoran mucho en atenderte",
    date:'17-2-2022',
    time:'08:30 pm',
    isSelected: false
  },
  {
    id: 2,
    name: "Adrian",
    email: "example@gmail.com",
    subject: "Buena comida",
    message: "Excelente comida",
    date:'16-2-2022',
    time:'08:30 pm',
    isSelected: false
  },
];

const Messages = () => {
  const [data, setData] = useState([]); // esto va null
  const [currentData, setCurrentData] = useState({})
  const [messageModal, setMessageModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    let newData = [...data.filter((item) => item.isSelected === true)]
    setCurrentData(newData)
  };

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
  

  //?Poner url bien cuando lo vayas a probar bien
  //*/contact
    useEffect(() => {
      setData(testData)
      // axios
      //   .get("https://jsonplaceholder.typicode.com/users", { token: {} })
      //   .then((res) => setData(res.data))
      //   .catch((e) => console.log("Error " + e));
    }, []);

    const handleViewMessageModal = (id) => {
      setMessageModal(true);
      setCurrentData(...data.filter((item) => item.id === id));
    }

  return (
    <div
      className="tab-pane text-left fade show active py-4"
      id="vert-tabs-home"
      role="tabpanel"
      aria-labelledby="vert-tabs-home-tab"
    >
      {data.length === 0 ? (
        <div
          className="d-flex justify-content-center mt-5"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="fas fa-2x fa-sync-alt fa-spin mt-5"></i>
        </div>
      ) : (
        <div className="card card-primary card-outline">
          <div className="card-header">
            <h3 className="card-title">Inbox</h3>
            
            {/* /.card-tools */}
          </div>
          {/* /.card-header */}
          <div className="card-body p-0">
            <div className="mailbox-controls">
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
                        <td className="mailbox-subject">{item.email}</td>
                        <td className="mailbox-attachment" />
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
            <div className="mailbox-controls">
              {/* Check all button */}
              <button onClick={() => handleSelect(null, true)} type="button" className="btn btn-default btn-sm checkbox-toggle"><i className="far fa-check-square" />
              </button>
              <div className="btn-group">
                <button onClick={(e) => handleDeleteModal()} data-toggle="modal" data-target="#modal-deleteMessageModal"type="button" className="btn btn-default btn-sm"><i className="far fa-trash-alt" /></button>
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
      {deleteModal? <DeleteModal currentData={currentData} url='' /> : null}
      {messageModal? <MessageModal currentData={currentData}/> : null}
    </div>
  );
};

export default Messages;