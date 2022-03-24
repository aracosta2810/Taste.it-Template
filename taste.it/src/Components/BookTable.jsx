// import pic from '../../images/about.jpg'

import {  faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeField from 'react-simple-timefield';
import axios from "axios";
import { useState } from "react";

const BookTable = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('08:00');

  const handleDateChange = date => setDate(date);

  const handleSunbmit = (e) =>{
    e.preventDefault();

    let data ={
      name: e.target.name.value,
      email: e.target.email.value,
      telephone: e.target.phone.value,
      check_in: `${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}`,
      time,
      guest: e.target.guest.value
    }
    
    console.log(data);

    axios.post(`${window.urlServer}book-table/create`,data)
    .then(res => console.log(res))
    .catch(e => console.log("Ha habido un error " + e))

  }

    return ( 
        <div>
          <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-sm-4 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
                  {/* Form */}
                  <form action="post" onSubmit={(e) => handleSunbmit(e)} className="appointment-form">
                    <h3 className="mb-3">Book your Table</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input id="name" type="name" className="form-control" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input id="email" type="email" className="form-control" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input id="phone" type="text" className="form-control" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-wrap">
                            <div className="icon"><FontAwesomeIcon icon={faCalendarDays} color='white' style={{fontSize:'11px'}}/></div>
                            <DatePicker className="form-control book_date" selected={date} onChange={handleDateChange} />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="input-wrap">
                            <div className="icon"><FontAwesomeIcon icon={faClock} color='white' style={{fontSize:'11px'}}/></div>
                            <TimeField 
                              style={{width:'100%'}} 
                              className="form-control book_time" 
                              value={time} 
                              onChange={(e) => setTime(e.target.value)} 
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="form-field">
                            <div className="select-wrap">
                              <div className="icon"><span className="fa fa-chevron-down" /></div>
                              <select id="guest" className="form-control">
                                <option value>Guest</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input type="submit" defaultValue="Book Your Table Now" className="btn btn-white py-3 px-4" />
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* End form */}
                </div>
                <div className="col-sm-8 wrap-about py-5  img" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/about.jpg'})`}}>
                  <div className="row pb-5 pb-md-0">
                    <div className="col-md-12 col-lg-7">
                      <div className="heading-section ftco-animate mb-5 fadeInUp ftco-animated mt-5 mb-4">
                        <div className="pl-lg-3 ml-md-5 heading-section ">
                          {/* Aqui no se poner el tipo ese de fuente */}
                          <span className="subheading">About</span>
                          <h2 className="mb-4">Welcome to Taste.it</h2>
                        </div>
                      </div>
                      <div className="pl-lg-3 ml-md-5">
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
        
      </div>
    );
}

export default BookTable;