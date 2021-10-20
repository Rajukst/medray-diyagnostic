import { useEffect, useState } from "react"
import initialApp from "../../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initialApp()
const useFirebase=()=>{
    const googleProvider= new GoogleAuthProvider()
    const auth= getAuth()

    const [user, setUser]= useState({})
    const [error, setError]= useState('')
    const [regError, setRegError]= useState('')
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')
    const [mobile, setMobile]= useState('')


    const signWithGoogle=()=>{
      return  signInWithPopup(auth, googleProvider)
        .catch(error=>{
            setError(error.message)
        })
    }
// email password register handler
// (emailPasswordSignUp is register button)
const emailPasswordSignUp=(e)=>{
    e.preventDefault()
    if(password.length<6){
       setRegError('password should be at least 6 characters')
        return;
    }
    console.log(email, password, userName, mobile)
    createUserWithEmailAndPassword(auth, email, password)
    .then(result=>{
        const user= result.user
        console.log(user)
        setRegError('')
    })
    .catch(error=>{
        setRegError(error.message)
    })
}
// handleing all registron form inputs:
const handleUserName=e =>{
    setUserName(e.target.value)
}
const userMobile= e=>{
    setMobile(e.target.value)
}

const handleUser= e=>{
    setEmail(e.target.value)
}
const handlePass= e=>{
    setPassword(e.target.value)
}

// email password register handler
// (emailPasswordSignUp is register button)
 



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
        handleUserName,
        userMobile,
        user,
        error,
        regError,
        emailPasswordSignUp,
        logOut
    }
}
export default useFirebase;