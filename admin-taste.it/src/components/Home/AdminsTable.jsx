import { useState } from "react";
import DeleteModal from "../sections/DeleteModal";

const AdminsTable = ({ data, setData, setToast }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentData, setCurrentData] = useState({})
  
  const handleDeleteModal = (id) => {
    setDeleteModal(true);
    let newData = [...data.filter((item) => item.isSelected === true)]
    setCurrentData(newData)
  };

    const handleSelect = (id, selectAll) => {
    let newData = [];
    let allSelect = false;

    if (selectAll) {
      data.forEach((item) => {
        if (item.isSelected === false) {
          allSelect = true;
        }
      });

      switch (allSelect) {
        case true:
          data.forEach((item) => {
            item.isSelected = true;
            newData.push(item);
          });
          break;

        case false:
          data.forEach((item) => {
            item.isSelected = false;
            newData.push(item);
          });
          break;

        default:
          break;
      }
    } else {
      data.forEach((item) => {
        if (item.id === id) item.isSelected = !item.isSelected;
        newData.push(item);
      });
    }

    setData(newData);
  };

  return (
    <div>
      <h3 className="display-5 mt-5">Admins List</h3>
      <div className="card">
        <div className="card-body">
          <div className=" card-info">
            <div className="d-flex justify-content-end pr-2">
              <button
                onClick={() => handleSelect(null, true)}
                type="button"
                className="btn btn-default btn-sm mr-3 checkbox-toggle"
              >
                <i className="far fa-check-square " />
              </button>
              <button
                onClick={() => handleDeleteModal(data)}
                className={`btn btn-sm btn-danger`}
                data-toggle="modal"
                data-target="#modal-deleteModal"
                disabled={data.filter((item) => item.isSelected).length === 0}
              >
                <i className="fas fa-trash" />
              </button>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="pointer mr-2"
                        defaultValue
                        checked={item.isSelected}
                        onChange={(e) => handleSelect(item.id, false)}
                        id={item.id}
                      />
                      {item.name}
                    </td>
                    <td>{item.email} </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {deleteModal? <DeleteModal currentData={currentData} setToast={setToast} setData={setData} url={`${window.urlServer}admin/delete`} /> : null}
    
    </div>
  );
};

export default AdminsTable;
