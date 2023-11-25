import logo from "../pngs/logoPollIt.png";
import '../componentStyles/myNavbar.css';
import { useState, useRef, useEffect } from "react";

function RegisterNavbar( { onRegisterClick, onLoginClick }) {

  const onRegisterClickRef = useRef(null);
  const onLoginClickRef = useRef(null);


    return (
      <nav className="navbar navbar-expand-lg"
      style={
        { backgroundColor: '#FFFFFF' ,  
        boxShadow: "0 0.3px 13px #021B2C" ,
        width: "100%",
        zIndex: "100"}}>

        <a className="navbar-brand navbarImg" href="#">
          <img src={logo}/>
        </a>
        <div className="navbar-nav ml-auto" id="navbarSupportedContent">
          <a className="nav-link navbarTextStyle"> 
          <button onClick={onLoginClick} 
          ref={onLoginClickRef}> Login</button> 
          </a>
          <a className="nav-link navbarTextStyle"> 
          <button onClick={onRegisterClick} 
          ref={onRegisterClickRef}> Register</button>
          </a>
        </div>
      </nav>
    );
  }
  

export default RegisterNavbar;