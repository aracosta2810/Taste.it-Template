import Header from "../Components/Header";
import Menu from "../Components/Menu";

const MenuSection = () => {
    return (
        <div>
            <Header title={"Menu"} section={"Menu"}/>
           <Menu/>
           <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt bg-primary">
                <div className="container ">
                <div className="row no-gutters">
                    <div className="col-12 p-4 p-md-5 d-flex align-items-center justify-content-center ">
                        <form action="#" className="appointment-form">
                            <h3 className="mb-3">Book your Table</h3>
                            <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="form-group">
                                <input type="name" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <div className="input-wrap">
                                    <div className="icon"><span className="fa fa-calendar" /></div>
                                    <input type="text" className="form-control book_date" placeholder="Check-In" />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <div className="input-wrap">
                                    <div className="icon"><span className="fa fa-clock-o" /></div>
                                    <input type="text" className="form-control book_time ui-timepicker-input" placeholder="Time" autoComplete="off" />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <div className="form-field">
                                    <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down" /></div>
                                    <select id="guest" className="form-control">
                                        <option value>Guest</option>
                                        <option value>1</option>
                                        <option value>2</option>
                                        <option value>3</option>
                                        <option value>4</option>
                                        <option value>5</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="submit" value="Book Your Table Now" className="btn btn-white py-3 px-4" />
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
}

export default MenuSection;