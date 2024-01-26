import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";

const auth = getAuth(app);
export const UserContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signOutUser = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            return unsubscribe();
        };
    });

    const authInfo = { user, createUser, signOutUser };
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export default AuthProvider;
