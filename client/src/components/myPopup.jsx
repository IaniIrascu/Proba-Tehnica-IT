import "../componentStyles/myPopup.css"
import closeButton from "../pngs/closeButton.png"
import RegisterForm from "./myRegisterForm";

function Popup({ handleClose, show }) {
    
    const showHideClassName = show ? 'popup display-block' 
    : 'popup display-none';
  
    return (
      <div className={showHideClassName}>
        <section className="popup-main">

        <div
        style={{display:"flex",
        justifyContent:"end",
        width:"100%"}}>
          <button onClick={handleClose}>
            <img onClick={handleClose} className="closeButton" src={closeButton}/>
          </button>
        </div>
          <RegisterForm/>
        </section>
      </div>
    );
  }
  
  export default Popup;