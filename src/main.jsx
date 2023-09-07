import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom'
import Home from './Router/Home/Home.jsx'
import Comofunciona from './Router/ComoFunciona/ComoFunciona.jsx'
import Servicos from './Router/Servicos/Servicos.jsx'
import SobreNos from './Router/SobreNos/Sobrenos.jsx'
import Contato from './Router/Contato/Contato.jsx'
import Login from './Router/Login/Login.jsx'
import Error from './Router/Error/Error.jsx'
import Cadrastro from './Router/Cadastro/Cadastro.jsx'
import PortalCliente from './Router/PortalCliente/PortalCliente.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {        
        path:'/',
        element: <Home/>

      },
      {
        path: '/ComoFunciona',
        element: <Comofunciona/>

      },
      {
        path: '/Servicos',
        element: <Servicos/>
      },
      {
        path: '/SobreNos',
        element: <SobreNos/>
      },
      {
        path: '/Contato',
        element: <Contato/>
      },
      {
        path: '/Login',
        element: <Login/>
      },
      {
        path: '/Cadastro',
        element: <Cadrastro/>
      },
      {
        path: '/PortalCliente',
        element: <PortalCliente/>
      },
      {
        path: '/antiga',
        element: <Navigate to='/'/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
