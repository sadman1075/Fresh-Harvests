import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import AuthContext from './AuthContext';
import auth from '../Firebase/Firebase';
import { useEffect, useState } from 'react';

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)

    const createGoogleuser = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])


    const authinfo = { createUser, createGoogleuser, loginUser, logout,user }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {
                    children
                }
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;