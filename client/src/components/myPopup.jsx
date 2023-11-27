import "../componentStyles/myPopup.css"
import closeButton from "../pngs/closeButton.png"
import RegisterForm from "./myRegisterForm";
import LoginForm from "./myLoginForm";
import { useState } from "react";

function Popup({ closeRegisterPopup, showRegisterPopup,
showLoginPopup, closeLoginPopup }) {
    
    const showHideClassNameRegister = showRegisterPopup ? 'popup display-block' 
    : 'popup display-none';

    const showHideClassNameLogin = showLoginPopup ? 'popup display-block' 
    : 'popup display-none';  
  
    const showHide = (showLoginPopup || showRegisterPopup) ?
    'popup display-block' : 'popup display-none';



    return (
      <div className={showHide} >
      <div className={showHideClassNameRegister}>
        <section className="popup-main">

        <div
        style={{display:"flex",
        justifyContent:"end"}}>
          <button>
            <img onClick={closeRegisterPopup} className="closeButton" src={closeButton}/>
          </button>
        </div>
        <div className="display-block">
        <RegisterForm/>
        </div>
        </section>
      </div>
      <div className={showHideClassNameLogin}>
        <section className="popup-main">

          <div
          style={{display:"flex",
          justifyContent:"end"}}>
            <button onClick={closeLoginPopup}>
              <img onClick={closeLoginPopup} className="closeButton" src={closeButton}/>
            </button>
          </div>
          <LoginForm/>
        </section>
      </div>
    </div>

    );
  }
  
  export default Popup;