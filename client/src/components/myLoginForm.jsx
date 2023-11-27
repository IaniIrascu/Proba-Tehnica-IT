import "../componentStyles/myForm.css"
import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validCredentials, setIsValidCredentials] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);




    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            setIsLoading(true);

            const response = await fetch('http://localhost:3000/check-user', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({ email, password }),
            });
      
            const data = await response.json();
            setIsValidCredentials(data.accessToken);

            if (data.accessToken) {
                window.alert('Credentials are correct!');
                console.log("logged in");
            } else {
                window.alert('Credentials are incorrect. Retry login!');
                setErrorMessage(data.error);
            }
          } catch (error) {
            console.error('Error checking credentials:', error);
          } finally {

            setIsLoading(false);
          }
    }



    return (
            <form style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                alignItems:"center"
            }}>
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
                    style={{marginTop:"150px"}}>
                {isLoading ? 'Logging in...' : 'Login'}
                </button>
                </label>
                {errorMessage && <p className="textRegisterLogin">{errorMessage}</p>}
            </form>
    );
}
 
export default LoginForm;