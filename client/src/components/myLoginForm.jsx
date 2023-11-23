import "../componentStyles/myForm.css"
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isValidCredentials, setIsValidCredentials] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        try {
            const response = await fetch('http://localhost:3000/check-credentials', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ email, password }),
            });
      
            const data = await response.json();
      
            setIsValidCredentials(data.validCredentials);
            if (!data.validCredentials) {
              setErrorMessage(data.error);
            }
          } catch (error) {
            console.error('Error checking credentials:', error);
            alert('Error checking credentials');
          }
    }

    return (
            <form>
                <label className="textRegisterLogin">
                    Login
                <input 
                    className="formField"
                    type="email" 
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    className="formField"
                    type="password" 
                    placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                <button 
                    className="createAccountButton"
                    type="submit"
                    onClick={handleLogin}
                    style={{marginTop:"150px"}}> Login
                </button>
                </label>
            </form>
    );
}
 
export default LoginForm;