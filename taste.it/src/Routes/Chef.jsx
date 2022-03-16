import BookTable from "../Components/BookTable";
import Chefs from "../Components/Chefs";
import Header from "../Components/Header";

const Chef = () => {
    return (
        <div>
            <Header title={"Master Chef"} section={"Chef"}/>
            <Chefs/>
            <BookTable/>
        </div>
    );
}

export default Chef;