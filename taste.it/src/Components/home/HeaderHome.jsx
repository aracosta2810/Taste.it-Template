// import '../../styles/bootstrap.min.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const HeaderHome = () => {
  return (
    <section className="hero-wrap" id='header-home'>
        <OwlCarousel
              className="owl-theme"
              autoPlay
              items={"1"}
              loop
              
            >
              <div  class="item" style={{backgroundSize:'cover', backgroundPosition:'center',backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bg_1.jpg'})`, height:'100vh'}}>
                  {/* <div className="overlay" /> */}
                  {/* <div className="container" >
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{height:'100vh'}}>
                      <div className="col-md-12 ftco-animate fadeInUp ftco-animated">
                        <div className="text w-100 mt-5 text-center">
                          <span className="subheading">Taste.it Restaurant</span>
                          <h1>Cooking Since</h1>
                          <span className="subheading-2">1958</span>
                        </div>
                      </div>
                    </div>
                  </div> */}


              </div>
              {/* <div  class="item" style={{backgroundSize:'cover', backgroundPosition:'center',backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bg_2.jpg'})`, height:'100vh'}}>
                <div  >
                  <div className="overlay" />
                  <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" style={{height:'100vh'}}>
                      <div className="col-md-12 ftco-animate">
                        <div className="text w-100 mt-5 text-center">
                          <span className="subheading">Taste.it Restaurant</span>
                          <h1>Cooking Since</h1>
                          <span className="subheading-2">1958</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
          </OwlCarousel>
      </section>


  )
};

export default HeaderHome;