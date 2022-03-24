import { useState } from "react";
import { Link } from "react-router-dom";
import NewAdminForm from "../NewAdminForm";

const sections = [
  {
    url: "/offers",
    title: "Offers",
    color: "bg-success",
    icon: "fa fa-drumstick-bite",
  },
  {
    url: "/reservations",
    title: "Reservations Quests",
    color: "bg-gradient-teal",
    icon: "fa fa-question",
  },
  {
    url: "/messages",
    title: "Messages",
    color: "bg-danger",
    icon: "fa fa-envelope",
  },
];

// { url: "/", title: "Admin Registration", color:'bg-info', icon:'fa fa-user-plus' },
// {
//   "name": '',
//   "password": ''
//   "password_confirmation": '',
//   "email": ''
// }
const Home = ({ user }) => {
  const [newAdminModal, setNewAdminModal] = useState(false)

  const AdminRegistration = () => {
    return (
      <div className="col-lg-3 col-12 col-sm-6">
        <div className='small-box bg-gradient-info'>
          <div className="inner">
            <h4 className="mb-5">Admin Registration</h4>
          </div>
          <div className="icon">
            <i className='fa fa-user-plus'></i>
          </div>
          <div onClick={() => setNewAdminModal(true)} data-toggle="modal" data-target="#modal-NewAdminModal"  className="small-box-footer" style={{cursor:'pointer'}}>
            Go to <i className="fas fa-arrow-circle-right" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <h3 className="display-4 mt-1 mb-4 text-center">Home</h3>
      <div className="row">
        {user !== null && user.isSuperUser ? <AdminRegistration /> : null}
        {sections.map((item, key) => (
          <div key={key} className="col-lg-3 col-12 col-sm-6">
            <div className={`small-box ${item.color}`}>
              <div className="inner">
                <h4 className="mb-5">{item.title}</h4>
              </div>
              <div className="icon">
                <i className={item.icon}></i>
              </div>
              <Link to={`${item.url}`} className="small-box-footer">
                Go to <i className="fas fa-arrow-circle-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {newAdminModal? <NewAdminForm/> : null}
    </div>
  );
};

export default Home;
