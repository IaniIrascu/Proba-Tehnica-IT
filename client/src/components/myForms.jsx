import "../componentStyles/myPopup.css"
import closeButton from "../pngs/closeButton.png"
import "../componentStyles/myForm.css"
import { useState } from "react";

function Forms({ closeRegisterPopup, showRegisterPopup,
showLoginPopup, closeLoginPopup, onLoginSuccess, showCreatePollPopup, closeCreatePollPopup}) {
    
    const showHideClassNameRegister = showRegisterPopup ? 'popup display-block' 
    : 'popup display-none';

    const showHideClassNameLogin = showLoginPopup ? 'popup display-block' 
    : 'popup display-none';  

    const showHideClassNameCreatePoll = showCreatePollPopup ? 'popup display-block' 
    : 'popup display-none';  
  
    const showHide = (showLoginPopup || showRegisterPopup || showCreatePollPopup) ?
    'popup display-block' : 'popup display-none';


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);


    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setEmailError('Invalid email format');
        } else {
          setEmailError('');
        }
      };

    const validateConfirmPassword = () => {
        if (password !== confirmPassword) {
          setConfirmPasswordError('Passwords do not match');
        } else {
          setConfirmPasswordError('');
        }
      };

      const validatePassword = () => {
        if (password.length < 8 && password.length < 32) {
          setPasswordError('Password must be between 8 and 32 characters long');
        } else {
          setPasswordError('');
        }
      };

    const handleCreateAccount = (e) => {

      setIsRegistering(true);

        const user = { email, password };
        if (!emailError && !passwordError && !confirmPasswordError) {
            
            console.log('Form submitted successfully');
            e.preventDefault()
            fetch('http://localhost:3000/register-user', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
        })
        .then(() => {
            console.log('new user added');
            setIsRegistering(false);
        })
    } else {
        console.log('Form has errors. Please correct them.');
      }
    }

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);



    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            setIsLoading(true);
            const obj = {"email": loginEmail,
                         "password": loginPassword }

            const response = await fetch('http://localhost:3000/check-user', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(obj),
            });
      
            const data = await response.json();
            
            if (data.accessToken != null) {
                window.alert("Credentials are correct! Logged in!");
                console.log("logged in");
                onLoginSuccess();
                console.log(data.accesToken);

            } else {
                window.alert("Credentials incorrect! Try again!");
                setErrorMessage(data.error);
                console.log(data.accesToken);

            }
          } catch (error) {
            console.error('Error checking credentials:', error);
          } finally {

            setIsLoading(false);
          }
    }


    const [pollTitle, setPollTitle] = useState("");
    const [pollOptions, setPollOptions]=useState(["","",""]);


    const handleCreatePoll = async (e) => {
      e.preventDefault();
      try {
      const poll = {
        "email": loginEmail,
        "title": pollTitle,
        "options": pollOptions
    }
        const response = await fetch('http://localhost:3000/create-poll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(poll),
        });
  
        const data = await response.json();
  
        console.log('Poll created successfully:', data);
      } catch (error) {
        console.error('Error creating poll:', error);
      }
    }

    return (
      <div className={showHide}>
      <div className={showHideClassNameRegister}>
        <section className="popup-main">

        <div
        style={{display:"flex",
        justifyContent:"end"}}>
          <button>
            <img onClick={closeRegisterPopup} className="closeButton" src={closeButton}/>
          </button>
        </div>
        <form onSubmit={handleCreateAccount}>
                <label className="textRegisterLogin">
                    Register
                <input 
                    className="formField"
                    type="email" 
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError('');}}
                    onBlur={validateEmail}
                />
                {emailError && <span className='textError'>{emailError}</span>}
                <input 
                    className="formField"
                    type="password" 
                    placeholder="Password"
                    value={password} onChange={(e) => { setPassword(e.target.value);
                        setPasswordError('');
                      }} 
                      onBlur={validatePassword}
                  />
                   {passwordError && <span className='textError'>{passwordError}</span>}
                <input 
                    className="formField"
                    type="password" 
                    placeholder="Confirm Password"
                    value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value);
                        setConfirmPasswordError(''); 
                      }}
                      onBlur={validateConfirmPassword}
                    />
                    {confirmPasswordError && <span className='textError'>{confirmPasswordError}</span>}
                       
                <button 
                    className="createAccountButton"
                    type="submit"
                    onClick={handleCreateAccount}> 
                    {isRegistering ? 'Creating account...' : 'Create account'}
                </button>                
                </label>
            </form>
        </section>
      </div>


      <div className={showHideClassNameLogin}>        
        <div className="popup-main">
          <div
          style={{display:"flex",
          justifyContent:"end"}}>
            <button onClick={closeLoginPopup}>
              <img onClick={closeLoginPopup} className="closeButton" src={closeButton}/>
            </button>
          </div>
          <form>
                <label className="textRegisterLogin">
                    Login
                <input 
                    className="formField"
                    type="email" 
                    placeholder="Email"
                    value={loginEmail} 
                    onChange={(e) => setLoginEmail(e.target.value)} 
                />
                <input 
                    className="formField"
                    type="password" 
                    placeholder="Password"
                    value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)
                    } 
                />                
                {errorMessage && <p className="textError">{errorMessage}</p>}
                <button 
                    className="createAccountButton"
                    type="submit"
                    onClick={handleLogin}
                    >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                </label>
            </form>
        </div>
      </div>



      <div className={showHideClassNameCreatePoll}>
      <section className="popup-main" style={{width:"40%"}}>
          <div
          style={{display:"flex",
          justifyContent:"end"}}>
            <button onClick={closeCreatePollPopup}>
              <img onClick={closeCreatePollPopup} className="closeButton" src={closeButton}/>
            </button>
          </div>
          <form className="createPollForm">
                <h1>
                  Create a Poll
                </h1>
                <h2>
                  Title
                </h2>
                <input 
                className="createPollField"
                placeholder="Type your question here"
                value={pollTitle}
                onChange={(e) => setPollTitle(e.target.value)}/>
                <h2>
                  Answer Options
                </h2>
                {pollOptions.map((pollOption, index) => (
                  <input
                    key={index}
                    className="createPollField"
                    placeholder={`Option ${index + 1}`}
                    value={pollOption}
                    onChange={(e) => {
                      const updatedOptions = [...pollOptions];
                      updatedOptions[index] = e.target.value;
                      setPollOptions(updatedOptions);
                    }}
                  />
                ))}

                <button 
                    className="createAccountButton"
                    type="submit"
                    onClick={handleCreatePoll}
                    >Create poll</button>
          </form>
      </section>
      </div>
    </div>

    );
  }
  
  export default Forms;