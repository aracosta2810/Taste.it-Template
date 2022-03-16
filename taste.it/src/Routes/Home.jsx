import BookTable from "../Components/BookTable";
import Chefs from "../Components/Chefs";
import EspecialOffers from "../Components/home/EspecialOffers";
import HeaderHome from "../Components/home/HeaderHome";
import LearnMore from "../Components/home/LearnMore";
import Sign from "../Components/home/Sign";
import Testimonials from "../Components/Testimonials";
import ToBookTable from "../Components/ToBookTable";

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <BookTable/>
      <Sign/>
      <EspecialOffers/>
      <Testimonials/>
      <Chefs/>
      <LearnMore/>
      <ToBookTable/>
    </div>
  );
};

export default Home;
