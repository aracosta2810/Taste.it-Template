import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';
import axios from 'axios';

window.urlServer ='/'

function App() {
  const [loading, setLoading] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // ********Remove these comments to use test user*****
    // setIsLogin(true)
    // setUser({user:'ADrian'})
    // return
    async function cargarUsuario(){
      if (localStorage.getItem('token') === null) {
        setLoading(false)
        setIsLogin(false)
        return
      }

      // Ver si hay algun usuario logueado
      try {
        const res = await axios.post(window.urlServer+'user', {}, {headers:  {'Authorization' : 'Bearer '+localStorage.getItem('token')}})
        
        setLoading(false)
        if (res.data.success) {
          setIsLogin(true)
          setUser(res.data.user)
        }
        
      } catch (error) {
        console.log(error);
      }
      
    }

    cargarUsuario()
  }, [])
  
  const handleLogin = (e) => {
    e.preventDefault();

    let data = {
      email: e.target.user.value ,
      password: e.target.pass.value
    }
    
    axios.post(window.urlServer+'admin/login', data)
    .then(res => {
      if(!res.data.success) {
        console.log(res);
        return
      }
      setUser(res.data.user)
      setIsLogin(true)
      localStorage.setItem('token', res.data.token)
    })
    .catch(e => console.log(e))
}

  return (
    <BrowserRouter >
       {
         loading? (
          <div  className="d-flex justify-content-center align-items-center" style={{ fontSize: "1.5rem", height:'100vh' }}>
            <div>
              <p className='display-4'><b>Taste.it</b>- Admin</p>
              <div className='d-flex justify-content-center'>
                <i className="fas fa-2x fa-sync-alt fa-spin mt-3 align-self-center"></i>
              </div>
            </div>
          </div>
         ) : isLogin && user !== null ? (
          <Content user={user} setIsLogin={setIsLogin} setUser={setUser}/>
         ) : (
          <Login handleLogin={handleLogin}/>
         )
       }
    </BrowserRouter>
  );
}

export default App;
