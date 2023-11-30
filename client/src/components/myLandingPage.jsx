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


      const [numberOfPolls, setNumberOfPolls] = useState(4);
      const [accessToken, setAccessToken] = useState("");
      const [loginEmail, setLoginEmail] = useState("");
      const [pollData, setPollData] = useState([""]);


      const displayPolls = async () => {
       
        try {
            const response = await fetch('http://localhost:3000/userpolls', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              },
              body: JSON.stringify({ email: loginEmail }),
            });
      
            const data = await response.json();
            console.log('Request done!', data.pollCount, data.userPolls);
            setNumberOfPolls(data.pollCount);
            setPollData(data.userPolls);
          } catch (error) {
            console.error('Error getting polls:', error);
          }
      }

        const pollIds = [];

        for (let i = 0; i < numberOfPolls; i += 2) {
          pollIds.push(i);
        }      
        useEffect(() => {
          if (isLogged) {
            displayPolls();
          }
        }, [isLogged, accessToken, loginEmail] );

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
                setAccessToken={setAccessToken}
                loginEmail={loginEmail}
                setLoginEmail={setLoginEmail}
                />                       

                
            </div>
         <div className="backgroundStyle" >
           
            {isLogged ? (<></>) : (
            <>
            <div className="textBoxTestoasaContainer">
                <p className="textBoxStyle"> {textBox} </p>
                <img className="imagineTestoasa" src={testoasa}/>
            </div>
            </>)}
           
          {isLogged ? (
                  <>
                  {pollIds.map((pollId) => (
                    <div className="divParinte" key={pollId}>
                      <Poll 
                      pollTitle={pollData[pollId].title} 
                      pollOptions={pollData[pollId].options} 
                      pollId={pollId.index} />
                      <Poll 
                      pollTitle={pollData[pollId + 1].title} 
                      pollOptions={pollData[pollId + 1].options} 
                      pollId={pollId + 1} />
                    </div>
                  ))}
                </>) : (
                <>
                  {pollIds.map((pollId) => (
                    <div className="divParinte" key={pollId}>
                      <Poll pollTitle={""} pollOptions={""} pollId={pollId} />
                      <Poll pollTitle={""} pollOptions={""} pollId={pollId.index + 1} />
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
