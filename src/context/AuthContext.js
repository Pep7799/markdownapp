import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    
 } from 'firebase/auth';
import {auth} from '../firebaseConfig'  

const UserContext = createContext()

export function AuthContextProvider ({ children }) {
    const [user, setUser] = useState({})

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    
       const logIn = (email, password) =>  {
        return signInWithEmailAndPassword(auth, email, password)
       }
    
       const logOut = () => {
        return signOut(auth)
       } 

       const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
      }


     
    
    
       const googleSignIn = () =>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup (auth,googleAuthProvider)
       }

    useEffect (() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser);
        });
        return() => {
            unsubscribe();
        }
    }, [])
    return (

        <UserContext.Provider value = {{signUp, user, logIn, logOut, googleSignIn, resetPassword}}>
            {children}
        </UserContext.Provider>
    )
}

export function UserAuth() {                 /*Custom*/
    return useContext(UserContext)
}