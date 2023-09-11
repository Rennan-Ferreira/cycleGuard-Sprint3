import Cabecalho from './components/Cabecalho'
import Home from './routes/Home/Home'
import './App.css'
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
