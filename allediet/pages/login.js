import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        
    }

    return (
        <>
            <p>Email</p>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            <p>Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Zaloguj się</button>
        </>
    )
}