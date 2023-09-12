import Cabecalho from './components/Cabecalho'
import Home from './routes/Home/Home'
import './App.css'
import { Outlet } from "react-router-dom";
import Login from './routes/Login/Login';
import Cadastro from './routes/Cadastro/Cadastro';

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
