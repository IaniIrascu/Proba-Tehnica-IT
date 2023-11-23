import { useState } from 'react'
import "../componentStyles/myForm.css"


function RegisterForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPasswd, setConfPasswd] = useState("");


    const handleCreateAccount = async (e) => {

    }
    return (
            <form>
                <label className="textRegisterLogin">
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