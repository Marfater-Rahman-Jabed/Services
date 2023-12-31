import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, deleteUser, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

import app from '../Firebase/Firebase.config';

export const AuthContexts = createContext();

const auth = getAuth(app)

const Contexts = ({ children }) => {
    const [findData, setFindData] = useState([])


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([])

    const provider = new GoogleAuthProvider()

    const googleLogIn = () => {
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPass = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const verificationEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const LogOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    const updateUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }
    const deleteUsers = () => {
        setLoading(true)
        return deleteUser(auth.email)
    }

    useEffect(() => {
        fetch(`http://localhost:5000/datafind/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setFindData((data))
            })
    }, [fetch(`http://localhost:5000/datafind/${user?.email}`)])



    const userFetchData = async () => {

        const response = await fetch(`http://localhost:5000/user/${user?.email}`)
        const data = await response.json()
        setUserData((data))

    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        });
        return () => unsubscribe();
    }, [])

    const authinfo = {
        user, createUser, LogIn, LogOut, updateUser, loading, setLoading, googleLogIn, deleteUsers, forgotPass, verificationEmail, findData, userData, userFetchData
    }
    return (
        <AuthContexts.Provider value={authinfo}>
            {
                children
            }
        </AuthContexts.Provider>
    );
};

export default Contexts;