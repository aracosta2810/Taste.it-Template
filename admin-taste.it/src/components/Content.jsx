import { Route, Routes } from "react-router";
import AppBar from "./AppBar";
import SideBar from "./SideBar";
import Messages from "./sections/Messages/Messages";
import Offers from "./sections/Offers/Offers";
import Reservations from "./sections/Reservations/Reservations";
import Home from "./sections/Home";

const Content = () => {
  return (
    <div className="hold-transition sidebar-mini">
      <div className="wrapper">
        {/* Navbar */}
        <AppBar />
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <SideBar />

        {/* Content Wrapper. Contains page content */}
        {/* Pages */}
        <div className="content-wrapper">
          <div className="px-0 px-sm-2 p-md-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="offers" element={<Offers />} />
              <Route path="reservations" element={<Reservations />} />
              <Route path="messages" element={<Messages />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
