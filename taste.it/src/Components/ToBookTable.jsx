import { Link } from "react-router-dom";

const ToBookTable = () => {
    return (
        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-intro bg-primary">
        <div className="container py-5">
          <div className="row py-2">
            <div className="col-md-12 text-center">
              <h2>We Make Delicious &amp; Nutritious Food</h2>
              <Link to={"/reservation"} className="btn btn-white btn-outline-white">Book A Table Now</Link>
            </div>
          </div>
        </div>
      </section>
    );
}

export default ToBookTable;