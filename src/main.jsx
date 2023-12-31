import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Error from './routes/Error/Error.jsx'
import Homedois from './routes/HomeDois/homedois.jsx'
import Cadastro from './routes/Cadastro/Cadastro.jsx'
import DadosBicicleta from './routes/DadosBicicleta/DadosBicicleta.jsx'
import DadosCliente from './routes/DadosCliente/ClienteDados.jsx'
import EsqueceuSenha from './routes/EsqueceuSenha/EsqueceuSenha.jsx'
import CameraPage from './routes/CameraPage/CameraPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      },
      {
        path: "/homedois",
        element: <Homedois/>
      },
      {
        path: "/DadosBicicleta",
        element: <DadosBicicleta/>
      },
      {
        path: "/DadosCliente",
        element: <DadosCliente/>
      },
      {
        path: "/EsqueceuSenha",
        element: <EsqueceuSenha/>
      },
      {
        path: "/CameraPage",
        element: <CameraPage/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)