import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { NextResponse } from "next/server";
import { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const router = useRouter();
    

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => console.log("user logged in", cred.user))
            .then(() => router.replace('/admin'))
            .catch((e) => console.log('user not found', e))
    }

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <>
            <p>Email</p>
            <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            <p>Password</p>
            <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogin}>Zaloguj się</button>
            <button onClick={handleLogout}>Wyloguje się</button>
        </>
    )
}