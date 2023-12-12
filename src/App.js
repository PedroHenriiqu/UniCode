import React from "react";
import LOGO from "./img/img/logo_unisales.png"
import "../../solitario/src/css/App.css"

//Reaproveitamento do codigo em todas as telas
import { Outlet } from "react-router-dom";


function App() {
    return (
        <body>
            <div className="container">
                <nav>
                    <div className="logo">
                     <img src={LOGO} alt='iaqu'/>
                    </div>

                    <ul>
                        <li><a href="Home">Home</a></li>
                        <li><a href="Curso">Curso</a></li> 
                        <li><a href="Periodo">Periodo</a></li> 
                        <li><a href="Professor">Professor</a></li>
                        <li><a href="Salas">Salas</a></li>
                        <li><a href="Desafios">Desafios</a></li>
                        <li><a href="Horarios">Horarios</a></li> 
                        
                    </ul>  
                    
                </nav>
                
            </div>
           <Outlet/> 
       </body> 
       
    );
  }
  
  export default App;
