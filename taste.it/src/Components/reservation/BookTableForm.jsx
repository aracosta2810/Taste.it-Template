import {  faCalendarDays, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeField from 'react-simple-timefield';
import axios from "axios";
import { useState } from "react";
import Toast from "../Toast";

const BookTableForm = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('08:00');
  const handleDateChange = date => setDate(date);
  const handleTimeChange = time => setTime(time);
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('test message');

  const handleSunbmit = (e) =>{
    e.preventDefault();
    if(e.target.guest.value.toLowerCase() === 'guest') return

    let data ={
      name: e.target.name.value,
      email: e.target.email.value,
      telephone: e.target.phone.value,
      check_in: `${date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}`,
      time,
      guest: e.target.guest.value
    }
    
    axios.post(`${window.urlServer}book-table/create`,data)
    .then(res => {
      if(res.data.success) {
        setToastMessage('Your table has been requested successfully, we will send you an email')
      }
        else setToast('Sorry, there was an error')
        
      setToast(true)
      setInterval(() => setToast(false), 4000)
    })
    .catch(e => console.log("Ha habido un error " + e))
  }

    return (
        <section className="ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt" style={{marginBottom:'100px'}}>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm-12 p-4 p-md-5 d-flex align-items-center justify-content-center bg-primary">
              <form onSubmit={(e) => handleSunbmit(e)} action="#" className="appointment-form">
                <h3 className="mb-3">Book your Table</h3>
                <div className="row justify-content-center">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input id="name" type="name" className="form-control" placeholder="Name" required/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input id="email" type="email" className="form-control" placeholder="Email"  required/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input id="phone" type="text" className="form-control" placeholder="Phone"  required/>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon"><FontAwesomeIcon icon={faCalendarDays} color='white' style={{fontSize:'11px'}}/></div>
                        <DatePicker className="form-control book_date" selected={date} onChange={handleDateChange} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="input-wrap">
                        <div className="icon"><FontAwesomeIcon icon={faClock} color='white' style={{fontSize:'11px'}}/></div>
                        <TimeField 
                          style={{width:'100%'}} 
                          className="form-control book_time" 
                          value={time} 
                          onChange={() => handleTimeChange( time)} 
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <div className="form-field">
                        <div className="select-wrap">
                          <div className="icon"><span className="fa fa-chevron-down" /></div>
                          <select id="guest" className="form-control" required>
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
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="submit" value="Book Your Table Now" className="btn btn-white py-3 px-4" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {toast? <Toast message={toastMessage} setToast={setToast}/> : null}
      </section>
    );
}

export default BookTableForm;