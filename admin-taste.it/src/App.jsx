import './App.css';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Content from './components/Content';

const data = {user:'adrian', password:'1234'}

function App() {
  const [login, setLogin] = useState(true)

  //!      Hacer autenticacion de usuarios con tokens para eso tengo que apreder a usarlos primero
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.target.user.value === data.user && e.target.pass.value === data.password) setLogin(true)
}

  return (
    <BrowserRouter >
       {
         login?
            <Content/>
          :
            <Login handleLogin={handleLogin}/>
       }
      
    </BrowserRouter>
  );
}

export default App;
