import "../componentStyles/myForm.css"
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {

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
                type="text" 
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