import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.confiq";

export const UserContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const signOutUser = () => {
        return signOut(auth);
    };

    const updateUserProfile = (fullName) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: fullName,
        })
            .then(() => {})
            .catch(() => {});
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            const currentUserEmail = { email: currentUser?.email };
            if (currentUser) {
                fetch("http://localhost:5000/access-token", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUserEmail),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        const token = data.token;
                        localStorage.setItem(
                            "volunteer-network-web-access-token",
                            token
                        );
                    });
            }
        });

        return () => {
            return unsubscribe();
        };
    });

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleSignIn,
        updateUserProfile,
    };
    return (
        <UserContext.Provider value={authInfo}>{children}</UserContext.Provider>
    );
};

export default AuthProvider;
