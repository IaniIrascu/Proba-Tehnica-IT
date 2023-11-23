import "../componentStyles/myForm.css"
import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateAccount = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/Login', {
            method: "post",
            body: JSON.stringify({ password, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setPassword("");
            setEmail("");
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
                type="text" 
                placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)} 
                />
                <button 
                className="createAccountButton"
                type="submit"
                onClick={handleCreateAccount}> Create account
                </button>
                </label>
            </form>
    );
}
 
export default LoginForm;