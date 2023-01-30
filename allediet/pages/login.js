import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => console.log("user logged in", cred.user))
            .catch((e) => console.log('user not found', e))
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