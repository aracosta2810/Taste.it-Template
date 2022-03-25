import { Route, Routes } from "react-router";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import Messages from "./sections/Messages/Messages";
import Offers from "./sections/Offers/Offers";
import Reservations from "./sections/Reservations/Reservations";
import Error404 from "./Error404";
import Home from "./Home/Home";

const Content = ({user, setIsLogin}) => {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        <AppBar user={user} setIsLogin={setIsLogin}/>
        <SideBar />

        {/* Content Wrapper. Contains page content */}
        {/* Pages */}
        <div className="content-wrapper">
          <div className="px-0 px-sm-2 p-md-4">
            <Routes>
              <Route path="/" element={<Home user={user}/>} />
              <Route path="offers" element={<Offers />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="messages" element={<Messages />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
