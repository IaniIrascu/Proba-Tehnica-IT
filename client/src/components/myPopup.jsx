import "../componentStyles/myPopup.css"
import closeButton from "../pngs/closeButton.png"
import RegisterForm from "./myRegisterForm";
import LoginForm from "./myLoginForm";
import { useRef } from "react";

function Popup({ closeRegisterPopup, showRegisterPopup,
showLoginPopup, closeLoginPopup}) {

    const onClickCloseRef = useRef(null)
    
    const showHideClassNameRegister = showRegisterPopup ? 'popup display-block' 
    : 'popup display-none';

    const showHideClassNameLogin = showLoginPopup ? 'popup display-block' 
    : 'popup display-none';  
  
    const showHide = (showLoginPopup || showRegisterPopup) ?
    'popup display-block' : 'popup display-none';

    return (
      <div className={showHide}>
      <div className={showHideClassNameRegister}>
        <section className="popup-main">

        <div
        style={{display:"flex",
        justifyContent:"end",
        width:"100%"}}>
          <button>
            <img onClick={closeRegisterPopup} ref={onClickCloseRef} className="closeButton" src={closeButton}/>
          </button>
        </div>
          <RegisterForm/>
        </section>
      </div>
      <div className={showHideClassNameLogin}>
        <section className="popup-main">

          <div
          style={{display:"flex",
          justifyContent:"end",
          width:"100%"}}>
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