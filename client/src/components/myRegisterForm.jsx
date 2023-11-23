import { useState } from 'react'
import "../componentStyles/myForm.css"


function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPasswd, setConfPasswd] = useState("");


    const handleCreateAccount = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
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
            setConfPasswd("");
            setEmail("");
        }
    }
    return (
            <form>
                <label className="registerText">
                    Register
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
                <input 
                className="formField"
                type="text" 
                placeholder="Confirm Password"
                value={confPasswd} onChange={(e) => setConfPasswd(e.target.value)} 
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
 
export default RegisterForm;