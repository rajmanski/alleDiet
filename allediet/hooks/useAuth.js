import { auth } from "@/lib/firebase";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        return auth.onAuthStateChanged(user => {
            setUser(user);
            setIsLoading(false);
        });
    }, []);

    return {
        user, isLoading
    };
}

export default useAuth;