import { useState, useEffect } from 'react'
import "../componentStyles/myForm.css"


function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');


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

        const user = { email, password };
        if (!emailError && !passwordError && !confirmPasswordError) {
            
            console.log('Form submitted successfully');
            e.preventDefault()
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
        })
        .then(() => {
            console.log('new user added');
        })
    } else {
        console.log('Form has errors. Please correct them.');
      }
    }


    return (
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
                        setConfirmPasswordError(''); // Clear previous error when the user types
                      }}
                      onBlur={validateConfirmPassword}
                    />
                    {confirmPasswordError && <span className='textError'>{confirmPasswordError}</span>}
                       
                <button 
                    className="createAccountButton"
                    type="submit"
                    onClick={handleCreateAccount}> Create account
                </button>                
                </label>
            </form>
    );
}
 
export default RegisterForm;