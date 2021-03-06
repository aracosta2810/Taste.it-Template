import { useSelector } from "react-redux";
import { selectOffers } from "../Redux/OffersSlice";

const Menu = () => {
    const data = useSelector(selectOffers)

    return (
        <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center ftco-animate fadeInUp ftco-animated heading-section ">
            <span className="subheading">Specialties</span>
            <h2 className="mb-4">Our Menu</h2>
          </div>
        </div>
        <div className="row">
          {
            data.map((item, key) => 
            <div key={key} className="col-md-6 col-lg-4">
              <div className="menu-wrap ">
                <div className="heading-menu text-center ftco-animate fadeInUp ftco-animated ">
                  <h3>{item.section}</h3>
                </div>
                  {
                    item.offers.length === 0? (
                      <p className="text-center">There are no offers</p>
                    ) : (
                      item.offers.map((item2, key) => 
                      <div key={key} className={`menus d-flex ${item.offers[item.offers.length-1] === item2? "border-bottom-0" : ""}`  }>
                        <div
                          className="menu-img img"
                          style={{ backgroundImage: `url(${window.urlServer + 'storage/' +item2.url_photo})` }}
                        />
                        <div className="text">
                          <div className="d-flex">
                            <div className="one-half">
                              <h3>{item2.title}</h3>
                            </div>
                            <div className="one-forth">
                              <span className="price">${item2.price}</span>
                            </div>
                          </div>
                          <p>
                            {item2.description}
                          </p>
                        </div>
                      </div>
                    )
                    )
                  }
                <span className={`flat ${item.icons[0]}`} style={{ left: 0 }} />
                <span className={`flat ${item.icons[1]}`} style={{ right: 0 }} />
              </div>
            </div>
            )
          }
        </div>
      </div>
    </section>
    );
}

export default Menu;