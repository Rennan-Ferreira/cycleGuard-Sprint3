import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Login from './routes/Login/Login.jsx'
import Error from './routes/Error/Error.jsx'
import DadosBicicleta from './routes/DadosBicicleta/DadosBicicleta.jsx'
import DadosCliente from './routes/DadosCliente/ClienteDados.jsx'

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
        path: "/Login",
        element: <Login/>
      },
      {
        path: "/DadosBicicleta",
        element: <DadosBicicleta/>
      },
      {
        path: "/DadosCliente",
        element: <DadosCliente/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)