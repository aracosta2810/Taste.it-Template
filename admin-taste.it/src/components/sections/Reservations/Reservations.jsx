import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "../../Toast";

const testData = [
  {
    id: 1,
    name: "Jhon",
    email: "example@gmail.com",
    check_in: "28-2-2022",
    time: "08:22 pm",
    guest: 5,
    isSelected: false,
  },
  {
    id: 2,
    name: "Sara",
    email: "example@gmail.com",
    check_in: "14-3-2022",
    time: "09:00 pm",
    guest: 1,
    isSelected: false,
  },
];

const Reservations = () => {
  const [data, setData] = useState(null);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    // setData(testData);
    
    axios.get(`${window.urlServer}book-table`, {headers:{'Authorization' : 'Bearer ' + localStorage.getItem('token')}})
    .then(res => {
      console.log(res);

      if(res.data.length === 0) {
        setData([])
        return
      }

      let data = res.data

      data.forEach(item => item.isSelected = false)
      setData(data)
    })
    .catch(e => console.log('Error: ' + e))
  }, []);

  const handleAcceptOrReject = async(accept) => {
    let ids = [];

    data.forEach((item) => {
      if (item.isSelected) ids.push(item.id);
    });

    axios
      .post(accept ? `${window.urlServer}book-table/confirmate` : `${window.urlServer}book-table/denegate`, 
        {ids: [...ids]},
        {headers: {'Authorization' : `Bearer ${localStorage.getItem('token')}`}}
      )
      .then((res) => {
        if (res.data.success) {
          setToast(true)
          setTimeout(() => setToast(false), 2000)
        }
      })
      .catch((e) => console.log("Error: " + e));
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

  return data == null ? (
    <div
      className="d-flex justify-content-center pt-5"
      style={{ fontSize: "1.5rem" }}
    >
      <i className="fas fa-2x fa-sync-alt fa-spin mt-5"></i>
    </div>
  ) : data.length === 0? 
      <h2 className="pt-4 text-center">There are no reservations requests</h2>
    : (
    <div>

      {
        toast?
          <Toast setToast={setToast} message={'Operation completed successfully'} />
        :
          null
      }

      <h3 className="mb-3 ml-3 ml-sm-0">Reservations Requests</h3>
      <div className="d-flex align-items-center  mb-3">
        <div className="ml-3 ml-sm-0">
          <button
            onClick={() => handleSelect(null, true)}
            type="button"
            className="btn btn-default btn-sm checkbox-toggle"
          >
            <i className="far fa-check-square" />
          </button>
          <label className="m-0 ml-2">Select all</label>
        </div>
        <button
          onClick={() => handleAcceptOrReject(true)}
          className={`btn btn-info btn-sm ml-4 `}
          disabled={data.filter((item) => item.isSelected).length === 0}
        >
          Accept
        </button>
        <button
          onClick={() => handleAcceptOrReject(false)}
          className={`btn btn-danger btn-sm ml-4`}
          disabled={data.filter((item) => item.isSelected).length === 0}
        >
          Reject
        </button>
      </div>
      <div className="row">
        {data.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 ">
            <div
              className={`info-box pointer ${
                item.isSelected ? "bg-success " : ""
              }`}
              onClick={() => handleSelect(item.id, false)}
            >
              <span
                className={`info-box-icon ${item.isSelected ? "" : "bg-info"}`}
              >
                <i
                  className={`fa ${
                    item.isSelected ? "fa-check" : "fa-drumstick-bite"
                  }`}
                />
              </span>
              <div className="info-box-content">
                <span className="info-box-text">
                  <b>{item.name}</b>
                </span>
                <span className="info-box-text">Guest: {item.guest}</span>
                <span className=" d-flex">
                  {item.check_in} <span className="ml-2">{item.time}</span>
                </span><span className="">
                  {item.email}
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reservations;
