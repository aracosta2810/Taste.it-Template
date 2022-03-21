import { useState, useEffect } from "react";
import DeleteModal from "../DeleteModal";
import EditOffertModal from "./EditOffertModal";
import OffertModal from "./OffertModal";
import pic from "./foto.jpg";
import AddOffertModal from "./AddOffertModal";
import axios from "axios";

const offers = [
  {
    id: 1,
    title: "Pizza",
    price: 12.4,
    photo: pic,
    is_especial: 1,
    description: "Cheese and tomatoes",
    isSelected: false,
  },
  {
    id: 2,
    title: "Rice and Meat",
    price: 25.4,
    photo: pic,
    is_especial: 0,
    description: "With meat",
    isSelected: false,
  },
];

const Offers = () => {
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState({});
  const [offertModal, setOffertModal] = useState(false);
  const [addOffertModal, setAddOffertModal] = useState(false);
  const [editOffertModal, setEditOffertModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleViewModal = (id, modal) => {
    modal(true);
    setCurrentData(...offers.filter((item) => item.id === id));
  };

  const handleDeleteModal = () => {
    setDeleteModal(true);
    let newData = [...data.filter((item) => item.isSelected === true)];
    setCurrentData(newData);
  };

  //?Poner url bien cuando lo vayas a probar bien
  //*  La url es: sitioweb.com/
  useEffect(() => {
    setData(offers);
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users",{token:{}})
    //   .then((res) => setData(res.data))
    //   .catch((e) => console.log("Error " + e));
  }, []);

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
      ) : (
        <div className="card card-info">
          <div className="card-header">
            <h3 className="card-title">Menu</h3>
            <div className="card-tools">
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
                onClick={() => handleDeleteModal()}
                className={`btn btn-sm btn-danger`}
                data-toggle="modal"
                data-target="#modal-deleteModal"
                disabled={data.filter(item => item.isSelected).length === 0}
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
                          onClick={() =>
                            handleViewModal(item.id, setOffertModal)
                          }
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
          {/* /.card-body */}
        </div>
      )}

      {offertModal ? <OffertModal currentData={currentData} /> : null}
      {addOffertModal ? <AddOffertModal currentData={currentData} /> : null}
      {editOffertModal ? <EditOffertModal currentData={currentData} /> : null}
      {deleteModal ? <DeleteModal currentData={currentData} url={`${window.urlServer}/offer/delete`}/> : null}
    </div>
  );
};

export default Offers;
