import { useEffect, useState } from "react"
import initialApp from "../../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, createUserWithEmailAndPassword } from "firebase/auth";

initialApp()
const useFirebase=()=>{
    const [user, setUser]= useState({})
    const [error, setError]= useState('')
    const googleProvider= new GoogleAuthProvider()
    const auth= getAuth()

    const signWithGoogle=()=>{
      return  signInWithPopup(auth, googleProvider)
        .catch(error=>{
            setError(error.message)
        })
    }
// email password handler

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser('')
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[])
    return {
        signWithGoogle,
      
        user,
        error,
        logOut
    }
}
export default useFirebase;