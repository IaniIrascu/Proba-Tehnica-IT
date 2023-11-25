import Navbar from "./myNavbar";
import "../componentStyles/myLandingPage.css"
import Footer from "./myFooter";
import testoasa from "../pngs/testoasa.png"
import Popup from "./myPopup";
import { useState, useRef, useEffect } from "react";
import Poll from "./myPoll";


const textBox="Opiniile sunt mai importante ca niciodată. \
Platformele de sondaje permit organizatorilor să culeagă \
feedback direct de la audiența lor și să înțeleagă mai bine \
nevoile și dorințele acesteia."

function LandingPage () {

    const [showRegisterPopup, setShowRegisterPopup] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleRegisterClick = () => {
        setShowRegisterPopup(true);
      };

    const handleCloseRegisterPopup = () => {
        setShowRegisterPopup(false);
      };

      const handleLoginClick = () => {
        setShowLoginPopup(true);
      }

      const handleCloseLoginPopup = () => {
        setShowLoginPopup(false);
      }

      const [ popupChange, setPopupChange ] = useState (false);

      const handlePopupChange = (newPopupChange) => {
        setPopupChange(newPopupChange);
        if(popupChange)
            window.location.reload();
      }


    return (
        <div className="backgroundStyle" >
             <div className="stickyNavbar"> 
                <Navbar 
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick}
                />

                <Popup 
                showRegisterPopup={showRegisterPopup} 
                closeRegisterPopup={handleCloseRegisterPopup} 
                showLoginPopup={showLoginPopup}
                closeLoginPopup={handleCloseLoginPopup} 
                onPopupChange={handlePopupChange}
             />                        
            </div>


            <div className="textBoxTestoasaContainer">
                <p className="textBoxStyle"> {textBox} </p>
                <img className="imagineTestoasa" src={testoasa}/>
            </div>
            <div className="divParinte">
                <Poll/>
                <Poll/>
            </div>
            <div className="divParinte">
                <Poll/>
                <Poll/>
            </div>
            <div style={{marginTop: "auto"}}>            
                <Footer/>
            </div>
        </div>
    );

}

export default LandingPage;
