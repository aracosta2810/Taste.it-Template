import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';
import axios from 'axios';
import Error404 from './components/Error404';


const data = {user:'adrian', password:'1234'}

// Axios.interceptors.request.use

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  // sessionStorage.setItem("token", "dasd787dsa8d")
  // sessionStorage.clear()

  useEffect(() => {
    async function cargarUsuario(){
      if (localStorage.getItem('token') === null) {
        setIsLogin(false)
        return
      }

      try {
        const data = await axios.get(window.urlServer, {token: localStorage.getItem('token')})
        if (data.success) {
          setUser({name: 'Adrian', isSuperUser: true})//Revisar donde van a mandar el user
          setIsLogin(true)
          // setUser({name: 'Yordanis', isSuperUser: false})
        }
      } catch (error) {
        console.log(error);
      }

      setIsLogin(true)
      setUser({name: 'Adrian', isSuperUser: true})
      // setUser({name: 'Yordanis', isSuperUser: false})
    }

    cargarUsuario()

    axios.get(window.urlServer)
    .then(res => console.log(res))
    .catch(e => console.log(e))

    // fetch('http://192.168.2.241:8080/taste-it/public')
    // .then(res => console.log(res))
    // .catch(e => console.log(e))

  }, [])
  
  const handleLogin = (e) => {//Modificar para pedir autenticacion al back
    e.preventDefault();
    if (e.target.user.value === data.user && e.target.pass.value === data.password){
      setUser({name: 'Adrian', isSuperUser: true})
      setIsLogin(true)
      localStorage.setItem('token', e.target.user.value +'ADSDA' + e.target.pass.value + 'dsadf')
    }
}

  return (
    <BrowserRouter >
       {
         isLogin ?
            <Content user={user}/>
          :
            <Login handleLogin={handleLogin}/>
       }
    </BrowserRouter>
  );
}

export default App;
