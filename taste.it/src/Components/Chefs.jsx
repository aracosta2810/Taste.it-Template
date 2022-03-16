
const chefs = [
  {urlImg: 'chef-4.jpg',name: 'John Gustavo', rol: 'CEO, Co Founder', info: 'I am an ambitious workaholic, but apart from that, pretty simple person.' },
  {urlImg: 'chef-2.jpg',name: 'Michelle Fraulen', rol: 'Head Chef', info: 'I am an ambitious workaholic, but apart from that, pretty simple person.' },
  {urlImg: 'chef-3.jpg',name: 'Alfred Smith', rol: 'Chef Cook', info: 'I am an ambitious workaholic, but apart from that, pretty simple person.' },
  {urlImg: 'chef-1.jpg',name: 'Antonio Santibanez', rol: 'Chef Cook', info: 'I am an ambitious workaholic, but apart from that, pretty simple person.' },
]

const Chefs = () => {
    return (
      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-7 text-center heading-section ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Chef</span>
              <h2 className="mb-4">Our Master Chef</h2>
            </div>
          </div>	
          <div className="row">
            {
              chefs.map((item, key) =>
              <div key={key} className="col-md-6 col-lg-3 ">
                <div className="staff">
                  <div className="img" style={{backgroundImage: `url(${process.env.PUBLIC_URL + `/assets/images/${item.urlImg}`})`}} />
                  <div className="text px-4 pt-2">
                    <h3>{item.name}</h3>
                    <span className="position mb-2">{item.rol}</span>
                    <div className="faded">
                      <p>{item.info}</p>
                      <ul className="ftco-social d-flex">
                        <li className=""><a href="/"><span className="icon-twitter" /></a></li>
                        <li className=""><a href="/"><span className="icon-facebook" /></a></li>
                        <li className=""><a href="/"><span className="icon-google-plus" /></a></li>
                        <li className=""><a href="/"><span className="icon-instagram" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              )
            }
          </div>
        </div>
      </section>
    );
}

export default Chefs;