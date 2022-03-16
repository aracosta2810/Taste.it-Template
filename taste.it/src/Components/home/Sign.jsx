const Sign = () => {
    return (
        <section className="ftco-section ftco-intro" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/bg_3.jpg'})`}}>
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <span>Now Booking</span>
                <h2>Private Dinners &amp; Happy Hours</h2>
              </div>
            </div>
          </div>
        </section>
    );
}

export default Sign;