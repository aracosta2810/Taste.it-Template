import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'

const routes = [
    {route: '/', name: 'Home'},
    {route: '/about', name: 'About'},
    {route: '/chef', name: 'Chef'},
    {route: '/menu', name: 'Menu'},
    {route: '/reservation', name: 'Reservation'},
    {route: '/contact', name: 'Contact'},
]

const Appbar = () => {
    const route = useLocation();
    return (
        <div>
            <div className="wrap">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12 col-md d-flex align-items-center">
                    <p className="mb-0 phone"><span className="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span className="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
                  </div>
                  <div className="col-12 col-md d-flex justify-content-md-end">
                    <p className="mb-0">Mon - Fri / 9:00-21:00, Sat - Sun / 10:00-20:00</p>
                    <div className="social-media">
                      <p className="mb-0 d-flex">
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <Link className="navbar-brand" to="/">Taste.<span>it</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="oi oi-menu" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                {
                    routes.map((item,key) =>
                        <li 
                            key={key} 
                            className={`nav-item ${route.pathname === item.route? 'active': ''}`}
                        >
                            <Link to={item.route} className="nav-link">{item.name}</Link>
                        </li>
                    )
                }
              </ul>
            </div>
          </div>
        </nav>
        </div>
    );
}

export default Appbar;