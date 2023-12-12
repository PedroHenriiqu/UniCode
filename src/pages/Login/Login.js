import React, { useState } from "react";
import jpgLOGO from "../../img/img/logo_unisales.png"
import { useNavigate } from 'react-router-dom';
import "../../css/Login.css"

function Login() {
    const navigate = useNavigate();
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleClick = () => {
      navigate('/Home');
      };

    return (
      <div className="c2ontainer">
        <div className="container-login">
         <div className="login">
          <form className="login-form">
  
            <span className="login-form-title">Bem Vindo!!! </span>
  
            <span className="login-form-title">
              <img src={jpgLOGO} alt='iaqu'/>
            </span>
  
            <div className='wrap-inp'>
              <input 
                className={email !== "" ? 'has-val   input' : 'input'} type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
  
            <div className='wrap-inp'>
              <input className={password !== "" ? 'has-val   input' : 'input'}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>
  
            <div className="container-login-form-btn">
              <button onClick={handleClick}className="login-btn">Login</button>
            </div>
  
  
          </form>
         </div>
       </div>
      </div>
    );
  }
  
  export default Login;