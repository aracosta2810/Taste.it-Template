import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
  {name: 'John Gustavo', position: 'Customer', imgUrl: '/assets/images/person_1.jpg', text:'Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blindtexts.'},
  {name: 'John Gustavo', position: 'Customer', imgUrl: '/assets/images/person_2.jpg', text:'Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blindtexts.'},
  {name: 'John Gustavo', position: 'Customer', imgUrl: '/assets/images/person_3.jpg', text:'Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blindtexts.'},
  {name: 'John Gustavo', position: 'Customer', imgUrl: '/assets/images/person_4.jpg', text:'Far far away, behind the word mountains, far from thecountries Vokalia and Consonantia, there live the blindtexts.'},
]

const Testimonials = () => {
  return (
    <section
      className="ftco-section testimony-section"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/images/bg_5.jpg"
        })`,
      }}
    >
      <div className="overlay" />
      <div className="container-fluid">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated heading-section-white">
            <span className="subheading">Testimony</span>
            <h2 className="mb-4">Happy Customer</h2>
          </div>
        </div>
        <div className="row justify-content-center fadeInUp ">
          <div className="col-7">
            <OwlCarousel
              className="owl-theme "
              autoPlay
              items={"1"}
              loop
              
            >
              {
                testimonials.map((item, key) => 
                <div key={key} class="item ">
                  <div className="testimony-wrap text-center">
                    <div className="text p-3">
                      <p className="mb-4">
                        {item.text}
                      </p>
                      <div
                        className="user-img mb-4"
                        style={{
                          backgroundImage: `url(${process.env.PUBLIC_URL + item.imgUrl})`,
                        
                        }}
                      >
                        <span className="quote d-flex align-items-center justify-content-center">
                          <FontAwesomeIcon icon={faQuoteLeft} color="red"/>
                        </span>
                      </div>
                      <p className="name">{item.name}</p>
                      <span className="position">{item.position}</span>
                    </div>
                  </div>
                </div>
                )
              }
            
            </OwlCarousel>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
