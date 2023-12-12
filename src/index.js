import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


// Gerenciar os Routers
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Import das telas
import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js';
import Curso from './pages/Curso/Curso.js';
import Periodo from './pages/Periodo/Periodo.js';
import Professor from './pages/Professor/Professor.js';
import Salas from './pages/Salas/Salas.js';
import Desafios from './pages/Desafios/Desafios.js';
import Horarios from './pages/Horarios/Horarios.js';



//const router = createBrowserRouter([  *Metodo sem reaproveitamento da nav*
//  {path:"/", element:<Login/>},
//  {path:"/Home", element:<Home/>},
//  {path:"/App", element:<App/>},
//])

const router = createBrowserRouter([
  {path:"/", element:<Login/>},
  {path:"/", 
    element:<App/>,
    children: [
    {
      path:"/Home", 
      element:<Home />,
    },
    {
      path:"/Curso", 
      element:<Curso />,
    },
    {
      path:"/Periodo", 
      element:<Periodo />,
    },
    {
      path:"/Professor", 
      element:<Professor />,
    },
    {
      path:"/Salas", 
      element:<Salas />,
    },
    {
      path:"/Desafios", 
      element:<Desafios />,
    },
    {
      path:"/Horarios", 
      element:<Horarios />,
    },
   ],
  },  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);