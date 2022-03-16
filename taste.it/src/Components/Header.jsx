import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({section, title}) => {
    return (
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/bg_5.jpg"}")`, backgroundPosition: '50% -60px'}} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
            <div className="row no-gutters slider-text align-items-end justify-content-center">
                <div className="col-md-9 ftco-animate text-center mb-5 fadeInUp ftco-animated">
                <h1 className="mb-2 bread">{title }</h1>
                <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <FontAwesomeIcon icon={faChevronRight} /></Link></span> <span>{section} <FontAwesomeIcon icon={faChevronRight} /></span></p>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Header;