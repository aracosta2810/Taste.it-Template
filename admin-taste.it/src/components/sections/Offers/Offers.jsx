import { useState, useEffect } from "react";
import DeleteModal from "../DeleteModal";
import EditOffertModal from "./EditOffertModal";
import OffertModal from "./OffertModal";
import AddOffertModal from "./AddOffertModal";
import axios from "axios";
import OffersTable from "./OffersTable"; 
import Toast from "../../Toast";

const pic = 'http://192.168.43.2:8080/taste-it/public/storage/uploads/foto.jpg'

const offers = [
  {section:'Breakfast', offers: [
    {id: 1, 
      url_photo: pic, title: 'Pizza', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 1},
    {id: 2, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 0},
  ]},
  {section:'Lunch', offers: [
    {id: 4, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 1},
  ]},
  {section:'Dinner', offers: [
    {id: 7, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 0},
    {id: 9, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 1},
  ]},
  {section:'Desserts', offers: [
    {id: 10, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 1},
  ]},
  {section:'Wine Card', offers: [
    {id: 11, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 0},
  ]},
  {section:'Drinks & Tea', offers: [
    {id: 12, url_photo: pic, title: 'Beef Roast Source', info: 'Meat, Potates, Rice, Tomatoes', price: 29, is_especial: 1},
  ]},
]


const Offers = () => {
  const [toast, setToast] = useState(false)
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState({});
  const [offertModal, setOffertModal] = useState(false);
  const [addOffertModal, setAddOffertModal] = useState(false);
  const [editOffertModal, setEditOffertModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleViewModal = (id, modal) => {
    modal(true);
    data.forEach(item => {
      item.offers.forEach(item2 => item2.id === id? setCurrentData(item2) : null)
    })
  };

  const handleDeleteModal = (datatoDelete) => {
    setDeleteModal(true);
    let newData = [...datatoDelete.filter((item) => item.isSelected === true)];
    setCurrentData(newData);
  };

  useEffect(() => {
    offers.forEach(item => {
      item.offers.forEach(item2 => {
        item2.isSelected = false
      })
    })

    // setData(offers);
    axios
      .get(window.urlServer+'offer')
      .then((res) => {
        // console.log(res);
        let newData = res.data

        newData.forEach(item => {
          item.offers.forEach(item2 => {
            item2.isSelected = false
          })
        })
        setData(newData)
      })
      .catch((e) => console.log("Error " + e));
  }, []);


  const handleRefresh = () =>{
    // testData.forEach(item => {
    //   item.isSelected = false
    // })
    setData(offers)
    console.log(data);

    //--------------------------------
    // axios.get(`${window.urlServer}/contact`, { token: {} })
    //   .then((res) => {
    //     let data = res.data

    //     data.forEach(item => item.isSelected = false)
    //     setData(data)
    //     // console.log(res);
    //   })
    //   .catch((e) => console.log("Error " + e));
  }

  return (
    <div
      className="tab-pane text-left fade show active py-4"
      id="vert-tabs-home"
      role="tabpanel"
      aria-labelledby="vert-tabs-home-tab"
    >
      {data === null ? (
        <div
          className="d-flex justify-content-center mt-5"
          style={{ fontSize: "1.5rem" }}
        >
          <i className="fas fa-2x fa-sync-alt fa-spin mt-5"></i>
        </div>
      ) : (
        <div className="card card-primary card-outline card-outline-tabs">
          <div className="card-header p-0 border-bottom-0">
            <ul className="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
              <li className="px-3 d-flex align-items-center"><h3 className="card-title">Menu</h3></li>
              {
                data.map((item, key) => 
                  <li className="nav-item" key={key}>
                    <a className={`nav-link ${item.section === data[0].section? 'active' : ''}`} data-toggle="pill" href={`#${item.section.toLowerCase() === 'wine card'? 'winecard' : item.section.toLowerCase() === 'drinks & tea'? 'drinks' : item.section}`} role="tab" aria-controls="custom-tabs-three-home" aria-selected="false">
                      {item.section}
                    </a>
                  </li>
                )
              }
            </ul>
          </div>
          <div className="card-body p-0">
            <div className="tab-content" id="custom-tabs-three-tabContent">
              {
                data.map((item, key) => 
                  <div key={key} className={`tab-pane fade ${item.section === data[0].section? 'active show' : ''}`} id={item.section.toLowerCase() === 'wine card'? 'winecard' : item.section.toLowerCase() === 'drinks & tea'? 'drinks' : item.section} role="tabpanel" aria-labelledby="custom-tabs-three-home-tab">
                    <OffersTable
                      section={item.section} 
                      offers={item.offers} 
                      setData={setData}
                      setAddOffertModal={setAddOffertModal} 
                      handleDeleteModal={handleDeleteModal} 
                      handleViewModal={handleViewModal}
                      setOffertModal={setOffertModal}
                      setEditOffertModal={setEditOffertModal}
                    />
                  </div>
                )
              }
            </div>
          </div> 
          {/* /.card */}
        </div>
      )} 
        
      
      {offertModal ? <OffertModal currentData={currentData} /> : null}
      {addOffertModal ? <AddOffertModal setData={setData} /> : null}
      {editOffertModal && currentData.title !== undefined  ? <EditOffertModal currentData={currentData} setData={setData}/> : null}
      {deleteModal ? <DeleteModal currentData={currentData} setToast={setToast} setData={setData} url={`${window.urlServer}offer/delete`}/> : null}
      
      {
        toast?
          <Toast message={'Offer(s) deleted successfully'} setToast={setToast}/>
        :
          null
      }
    </div>
  );
};

export default Offers;
