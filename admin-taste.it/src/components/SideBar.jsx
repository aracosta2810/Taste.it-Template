import {Link} from 'react-router-dom'
import { useLocation } from 'react-router';

const sections = [
  {url:'/', title: 'Home'},
  {url:'/offers', title: 'Offers'},
  {url:'/reservations', title: 'Reservations'},
  {url:'/messages', title: 'Messages'},
]

const SideBar = () => {
    const route = useLocation()

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{height:'100vh'}}>
        {/* Brand Logo */}
        <Link to="/" className="brand-link">
          <img
            src={process.env.PUBLIC_URL + 'favicon.ico'}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            width={100}
            height={100}
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Taste.it</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div> */}
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              {
                sections.map((item, key) =>
                <li key={key} className="nav-item">
                  <Link to={item.url} className={`nav-link ${item.url === route.pathname? 'active' : ''} `} id="vert-tabs-home-tab">
                    <i className="far fa-circle nav-icon" />
                    <p>{item.title}</p>
                  </Link>
                </li>
                )
              }
              
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    );
}

export default SideBar;