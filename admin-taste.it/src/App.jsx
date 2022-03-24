import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';
import axios from 'axios';


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

      // try {
      //   const data = await axios.get(window.urlServer, {token: localStorage.getItem('token')})
      //   if (data.success) {
      //     setUser({name: 'Adrian', isSuperUser: true})//Revisar donde van a mandar el user
      //     setIsLogin(true)
      //     // setUser({name: 'Yordanis', isSuperUser: false})
      //   }
      // } catch (error) {
      //   console.log(error);
      // }

      setIsLogin(true)
      setUser({name: 'Yordanis', isSuperUser: true})
      // setUser({name: 'Yordanis', isSuperUser: false})
    }

    cargarUsuario()

    return
    axios.get(window.urlServer)
    .then(res => console.log(res))
    .catch(e => console.log(e))

  }, [])
  
  const handleLogin = (e) => {//Modificar para pedir autenticacion al back
    e.preventDefault();

    let data = {
      name: e.target.user.value ,
      password: e.target.pass.value
    }
    
    axios.post(window.urlServer+'login', data)
    .then(res => {
      setIsLogin(true)
      localStorage.setItem('token', res.data.token)
    })
    .catch(e => console.log(e))

    // setUser({name: 'Adrian', isSuperUser: true})
    // setIsLogin(true)
    // localStorage.setItem('token', e.target.user.value +'ADSDA' + e.target.pass.value + 'dsadf')
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
