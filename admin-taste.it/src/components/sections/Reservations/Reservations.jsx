import axios from "axios";
import { useEffect, useState } from "react";

const testData = [
  {
    id: 1,
    name: "Jhon",
    email: "example@gmail.com",
    date: "28-2-2022",
    time: "08:22 pm",
    guest: 5,
    isSelected: false,
  },
  {
    id: 2,
    name: "Sara",
    email: "example@gmail.com",
    date: "14-3-2022",
    time: "09:00 pm",
    guest: 1,
    isSelected: false,
  },
];

const Reservations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testData);
    //   axios.get('url')
    //   .then(res => console.log(res))
    //   .catch(e => console.log('Error: ' + e))
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

  const handleAcceptOrReject = (accept) => {
    let ids = [];

    data.forEach((item) => {
      if (item.isSelected) ids.push(item.id);
    });

    axios
      .post(accept ? "urlAccept.com" : "urlReject.com", {
        ids: [...ids],
        token: "",
      })
      .then((res) => console.log(res))
      .catch((e) => console.log("Error: " + e));
  };

  return data.length === 0 ? (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ fontSize: "1.5rem" }}
    >
      <i className="fas fa-2x fa-sync-alt fa-spin mt-5"></i>
    </div>
  ) : (
    <div>
      <h3 className="mb-3">Reservations Requests</h3>
      <div className="d-flex align-items-center  mb-3">
        <div>
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
                  <span className=" ml-2">{item.email}</span>
                </span>
                <span className="info-box-text">Guest: {item.guest}</span>
                <span className="">
                  {item.date} <span className="ml-2">{item.time}</span>
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
