import { Navbar } from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Admin()  {
    
    const [email, setEmail] = useState(null);
    const router = useRouter();
    const user = useAuth();
    // console.log(user.user?.email);
    // useEffect(() => {
    //     setEmail(user.user?.email);
    // }, [])

    
    return (
        <>
            <Navbar/>
            <div className="mt-40 mx-auto text-center">Strona admina, tutaj można dodać nowy post</div>
            {auth.currentUser?.email === "prajmanski10@gmail.com" && (
                <div className="mt-40 mx-auto text-center">
                    <p>{auth.currentUser.email}</p>
                    <button>Dodaj nowy post</button>
                </div>
            )}
        </>
    )
}