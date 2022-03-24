import { useEffect, useState } from "react";

const OffersTable = ({section, offers, setAddOffertModal, handleDeleteModal, handleViewModal, setOffertModal, setEditOffertModal,}) => {
    const [data, setData] = useState(offers);
    
    useEffect(()=>{
        let newData = data

        newData.forEach(item=> item.type = section)
        // console.log(data);
        setData(newData)
    },[data,section])

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
    <div>
      <div className=" card-info">
        <div className="d-flex justify-content-end pt-1 pr-2">
          <button
            onClick={() => setAddOffertModal(true)}
            className="btn btn-sm btn-dark mr-3"
            data-toggle="modal"
            data-target="#modal-addOffertModal"
          >
            <i className="fa fa-plus"></i>
          </button>
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
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    className="pointer"
                    defaultValue
                    checked={item.isSelected}
                    onChange={(e) => handleSelect(item.id, false)}
                    id={item.id}
                  />
                  <i
                    className="fas fa-star mx-2"
                    style={{
                      color: item.is_especial === 1 ? "yellow" : "gray",
                    }}
                  />
                  {item.title}
                </td>
                <td>{item.price} </td>
                <td className="text-right py-0 align-middle">
                  <div className="btn-group btn-group-sm">
                    <button
                      onClick={() => handleViewModal(item.id, setOffertModal)}
                      href="/"
                      className="btn btn-dark"
                      data-toggle="modal"
                      data-target="#modal-offertModal"
                    >
                      <i className="fas fa-eye" />
                    </button>
                    <button
                      onClick={() =>
                        handleViewModal(item.id, setEditOffertModal)
                      }
                      className="btn btn-info"
                      data-toggle="modal"
                      data-target="#modal-editOffertModal"
                    >
                      <i className="fas fa-edit" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffersTable;
