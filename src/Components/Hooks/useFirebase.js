import { useEffect, useState } from "react"
import initialApp from "../../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initialApp()
const useFirebase=()=>{
    const [user, setUser]= useState({})
    const [error, setError]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const googleProvider= new GoogleAuthProvider()
    const auth= getAuth()

    const signWithGoogle=()=>{
      return  signInWithPopup(auth, googleProvider)
        .catch(error=>{
            setError(error.message)
        })
    }
// email password handler
const emailPasswordSignIn=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then ((result)=>{
       setEmail(result.user)
    })
    .catch((error)=>{
        setError(error.message)
    })
}

const handleUser= e=>{
    setEmail(e.target.value)
}
const handlePass= e=>{
    setPassword(e.target.value)
}


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
        handlePass,
        handleUser,
        user,
        error,
        emailPasswordSignIn,
        logOut
    }
}
export default useFirebase;