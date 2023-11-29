import Navbar from "./myNavbar";
import "../componentStyles/myLandingPage.css"
import Footer from "./myFooter";
import testoasa from "../pngs/testoasa.png"
import Forms from "./myForms";
import { useState, useRef, useEffect } from "react";
import Poll from "./myPoll";


const textBox="Opiniile sunt mai importante ca niciodată. \
Platformele de sondaje permit organizatorilor să culeagă \
feedback direct de la audiența lor și să înțeleagă mai bine \
nevoile și dorințele acesteia."

function LandingPage () {

    const [showRegisterPopup, setShowRegisterPopup] = useState(false);
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    const [showCreatePollPopup, setShowCreatePollPopup] = useState(false);

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

      const [isLogged, setIsLogged] = useState(false);

      const handleLoginSuccess = () => {
        setIsLogged(true);
        setShowLoginPopup(false);
      };

      const handleLogoutClick = () => {
        setIsLogged(false);
      }

      const handleCreatePollClick = () => {
        setShowCreatePollPopup(true);
      }

      const handleCloseCreatePollPopup = () => {
        setShowCreatePollPopup(false);
      }

        const numberOfPolls = 4;
        const pollIds = Array.from({ length: numberOfPolls / 2 }, (_, index) => index + 2);


    return (
      <div className="landingPageContent">
        
          <div className="stickyNavbar"> 
                <Navbar 
                onCreatePollClick={handleCreatePollClick}
                onLogoutClick={handleLogoutClick}
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick}
                isLogged={isLogged}
                />

                <Forms 
                showRegisterPopup={showRegisterPopup} 
                closeRegisterPopup={handleCloseRegisterPopup} 
                showLoginPopup={showLoginPopup}
                closeLoginPopup={handleCloseLoginPopup} 
                onLoginSuccess={handleLoginSuccess}
                showCreatePollPopup={showCreatePollPopup}
                closeCreatePollPopup={handleCloseCreatePollPopup}
                />                       

                
            </div>
         <div className="backgroundStyle" >
           
            {isLogged ? (<> <div style={{height:"100vh"}}></div></>) : (
            <>
            <div className="textBoxTestoasaContainer">
                <p className="textBoxStyle"> {textBox} </p>
                <img className="imagineTestoasa" src={testoasa}/>
            </div>
            </>)}
           
         
          {isLogged ? (
          <>
            <div>
              <Poll/>
            </div>
          </>) : (
                <>
                  {pollIds.map((pollId) => (
                    <div className="divParinte" key={pollId}>
                      <Poll pollId={pollId} />
                      <Poll pollId={pollId.index + 1} />
                    </div>
                  ))}
                </>)}
          </div>

            <div>
              <Footer/>
            </div>
        
      </div>
    );

}

export default LandingPage;
