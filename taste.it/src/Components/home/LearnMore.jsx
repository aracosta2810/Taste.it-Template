const LearnMore = () => {
    return (
        <section className="ftco-section ftco-no-pt ftco-no-pb">
            <div className="container">
              <div className="row d-flex">
                <div className="col-md-6 d-flex">
                  <div className="img img-2 w-100 mr-md-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/images/bg_6.jpg`})`}} />
                  <div className="img img-2 w-100 ml-md-2" style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/images/bg_4.jpg`})`}} />
                </div>
                <div className="col-md-6 ftco-animate makereservation p-4 p-md-5 fadeInUp ftco-animated">
                  <div className="heading-section ftco-animate mb-5 fadeInUp ftco-animated">
                    <span className="subheading">This is our secrets</span>
                    <h2 className="mb-4">Perfect Ingredients</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                    </p>
                    <p><a href="/" className="btn btn-primary">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
}

export default LearnMore;