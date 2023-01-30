import { Navbar } from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import { auth } from "@/lib/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Admin()  {
    
    const [email, setEmail] = useState(null);
    const [showPost, setShowPost] = useState(false);
    const router = useRouter();
    const user = useAuth();
    // console.log(user.user?.email);
    // useEffect(() => {
    //     setEmail(user.user?.email);
    // }, [])

    
    return (
        <>
            <Navbar/>
            <div className="mt-40 mx-auto text-center"></div>
            {auth.currentUser?.email === "prajmanski10@gmail.com" && (
                <div className="mt-20 mx-auto text-center max-w-4xl items-center justify-center">

                    <button onClick={() => setShowPost(!showPost)} className="text-4xl text-violet p-3 m-4" >Dodaj nowy post</button>
                    <div id="postSection">
                        {showPost && (
                            <div className="flex flex-col font-lato gap-5">
                                <p className="text-violet">Tytuł postu: </p>
                                <input type="text" />
                                <p className="text-violet">Opis postu: </p>
                                <input type="text" />
                                <p className="text-violet">Body postu: </p>
                                <textarea/>
                                <button className="bg-violet p-2">Załącz zdjęcie</button>
                                <button className="bg-violet p-2">Dodaj post</button>
                            </div>
                            
                        )}
                    </div>
                </div>
            )}
        </>
    )
}