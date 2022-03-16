import Header from "../Components/Header";
import LearnMore from "../Components/home/LearnMore"
import Testimonials from "../Components/Testimonials"
import ToBookTable from "../Components/ToBookTable";

const About = () => {
    return (
        <div>
            <Header title={"About"} section={"About"}/>
            <LearnMore/>
            <section className="ftco-section ftco-counter img" id="section-counter" style={{backgroundImage: `url("${process.env.PUBLIC_URL + "/assets/images/bg_4.jpg"}")`, backgroundPosition: '50% -218px'}} data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row d-md-flex align-items-center justify-content-center">
                        <div className="col-lg-10">
                        <div className="row d-md-flex align-items-center">
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="block-18">
                                <div className="text">
                                <strong className="number" data-number={100}>100</strong>
                                <span>Tasty Dishes</span>
                                </div>
                            </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="block-18">
                                <div className="text">
                                <strong className="number" data-number={4000}>4,000</strong>
                                <span>Dishes Served</span>
                                </div>
                            </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="block-18">
                                <div className="text">
                                <strong className="number" data-number={10}>10</strong>
                                <span>Restaurants</span>
                                </div>
                            </div>
                            </div>
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                            <div className="block-18">
                                <div className="text">
                                <strong className="number" data-number={10000}>10,000</strong>
                                <span>Happy Customers</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToBookTable/>
            <Testimonials/>
        </div>
    );
}

export default About;