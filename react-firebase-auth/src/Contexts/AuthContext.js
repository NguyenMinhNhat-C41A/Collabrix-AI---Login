import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState();

    function signup(email, password){
      console.log("email: " + email);
      console.log("password: " + password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log("userCredentials: " +userCredentials);
        })
        .catch((error) => {
          console.log(error);
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {setCurrentUser(user);})
        return unsubscribe;
    }, [])
        
    const value = {
        currentUser,
        signup
    };

  return (
    <div>
      <AuthContext.Provider value = {value}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
