import Header from "../Components/Header";
import LearnMore from "../Components/home/LearnMore";
import BookTableForm from "../Components/reservation/BookTableForm";

const Reservation = () => {
    return (
        <div>
            <Header title={"Book A Table Now "} section={"Reservation"} />
            <BookTableForm/>
            <LearnMore/>
        </div>
    );
}

export default Reservation;