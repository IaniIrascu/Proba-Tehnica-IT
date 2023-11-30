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

      const [accessToken, setAccessToken] = useState("");
      const [otherPollData, setOtherPollData] = useState([""]);
      const [numberOfOtherPolls, setNumberOfOtherPolls] = useState();

      const displayOtherPolls = async () => {
       
        try {
            const response = await fetch('http://localhost:3000/otherpolls', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
              },
              body: JSON.stringify({ email: loginEmail }),
            });
      
            const data = await response.json();
            console.log('Request done!', data.pollCount, data.otherPolls);
            setNumberOfOtherPolls(data.pollCount);
            setOtherPollData(data.otherPolls);

          } catch (error) {
            console.error('Error getting other polls:', error);
          }
      }


      const [numberOfMyPolls, setNumberOfMyPolls] = useState();
      const [loginEmail, setLoginEmail] = useState("");
      const [myPollData, setMyPollData] = useState([""]);

      const displayMyPolls = async () => {
       
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
            setNumberOfMyPolls(data.pollCount);
            setMyPollData(data.userPolls);
          } catch (error) {
            console.error('Error getting user polls:', error);
          }
      }


        const defaultIds = [];
        for(let def = 0; def < 4; def++){
          defaultIds.push(def);
        }
        const myPollIds = [];
       
        for (let i = 0; i < numberOfMyPolls; i++) {
          myPollIds.push(i);
        }      

        const otherPollIds = [];
        for(let j = 0; j < numberOfOtherPolls; j++) {
          otherPollIds.push(j);
        }

        useEffect(() => {
          if (isLogged) {
            displayMyPolls();
            displayOtherPolls();
          }
        }, [isLogged, accessToken, loginEmail ] );

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
                  <div style={{display:"flex", flexWrap:"wrap"}}>
                  {myPollIds.map((myPollId) => (
                    <div className="divParinte" key={myPollId}>
                      <Poll 
                      pollTitle={myPollData[myPollId].title} 
                      pollOptions={myPollData[myPollId].options} 
                      pollId={myPollId} 
                      isMyPoll={true}
                      accessToken={accessToken}
                      />           
                    </div>
                  ))}
                  {otherPollIds.map((otherPollId) => (
                    <div className="divParinte" key={otherPollId}>
                      <Poll 
                      pollTitle={otherPollData[otherPollId].title} 
                      pollOptions={otherPollData[otherPollId].options} 
                      pollId={numberOfMyPolls + otherPollId} 
                      isMyPoll={false}
                      />           
                    </div>
                  ))}
                </div>) : (
                <div style={{display:"flex", flexWrap:"wrap"}}>
    
                  {defaultIds.map((defaultId) => (
                    <div className="divParinte" key={defaultId}>
                      <Poll pollTitle={""} pollOptions={""} pollId={defaultId} />
                    </div>
                  ))}

                </div>)}
          </div>

            <div>
              <Footer/>
            </div>
        
      </div>
    );

}

export default LandingPage;
