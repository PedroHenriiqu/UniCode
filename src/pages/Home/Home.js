import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "../Login/Login";

function Home(){
    return (
        <>
        <Routes>
        <Route path="/minha-tela" element={<Home />} />
       </Routes>

        <header>
            <h1>Calendario<i class="bi bi-people-fill"></i></h1>
            </header> 
            </>  
    );
}

export default Home;