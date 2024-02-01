import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, doc,FieldPath ,setDoc, getDoc,getDocs,arrayUnion, collection, updateDoc} from 'firebase/firestore'
import { getAuth,signOut, onAuthStateChanged,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAowfpG6RgOmwiPHy_38qQxJ5c1Li2dRh0",
  authDomain: "expense-tracker-1785b.firebaseapp.com",
  projectId: "expense-tracker-1785b",
  storageBucket: "expense-tracker-1785b.appspot.com",
  messagingSenderId: "346068359915",
  appId: "1:346068359915:web:305a32250e39cdf9417cae",
  measurementId: "G-ZEV3RNTQJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

const db = getFirestore(app)

interface RegisterProps {
  email: string,
  password: string,
  fullName: string,
  username: string,
}

const register = async ({email,password, fullName, username}: RegisterProps) => {
 
  try {
      const user = await getDoc(doc(db, 'usernames', username)) 
     console.log(user)
      if(user.exists()) {
        // toast.error(`${username} is already used!`) 
        console.log("Username is already used!")
        return
      }
      const response = await createUserWithEmailAndPassword(auth,email,password)   
      const uid = response.user.uid
  
    //   await setDoc(doc(db, 'usernames', username), {
    //     userID: uid
    //   })
    //   await setDoc(doc(db, 'users', uid), { 
    //     username,
    //     userID: uid,
    //     fullName, 
    //   })
  
    //  if(auth.currentUser) {
    //   await updateProfile(auth.currentUser, {
    //     displayName: fullName
    //   })
    //  }
  
    //   return true
    } catch (err) {
    //   toast.error(err.code) 
        console.log(err)
    } 
  }

export {register}  