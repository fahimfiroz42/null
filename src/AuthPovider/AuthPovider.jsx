
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/firebase.config";


const AuthContext= createContext(null)



const AuthPovider = ({children}) => {
    const [user,setUser]=useState(null)

    //sign up user 
    const handleSignUp=(email,password)=>{
      createUserWithEmailAndPassword(auth,email,password)
    }
   
   //sign in user

   const handleSignIn=(email,password)=>{
   signInWithEmailAndPassword(auth,email,password)
   }

   //Google User login
  const handleGoogleLogin=()=>{
    const provider=new GoogleAuthProvider()
    signInWithPopup(auth,provider)
  }


  //signOut

  const handleSignOut=()=>{
    signOut(auth)
  }

    const userInfo={
        handleSignUp,
        user,
        setUser,
        handleSignIn,
        handleGoogleLogin,
        handleSignOut



    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPovider;