import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, doc,FieldPath ,setDoc, getDoc,getDocs,arrayUnion, collection, updateDoc} from 'firebase/firestore'
import { getAuth,signOut, onAuthStateChanged,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import toast from "react-hot-toast" 
import userHandle from "../utils/utils"; 

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

onAuthStateChanged(auth, async user => {  
  if(user) {
    const userData = await getDoc(doc(db, 'users', user.uid))  
    const accessToken = userData?._firestore._authCredentials.auth.auth.currentUser.stsTokenManager.accessToken
 
    const data = {
      uid: user.uid,
      fullName: user.displayName,
      emailVerified: user.emailVerified,
      accessToken,
      ...userData.data()
    }
      userHandle(data)
  } else { 
    userHandle(false)
  }
}) 

const login = async ({email,password}: any) => {
  try {
    await signInWithEmailAndPassword(auth,email,password)  
    userHandle(true)
    return true
  } catch (err: any) {
    toast.error(err.code) 
  } 
}

const register = async ({email,password, fullName, username}: RegisterProps) => {
 
  try {
      const user = await getDoc(doc(db, 'usernames', username)) 
      
      if(user.exists()) {
        toast.error(`${username} is already used!`)  
        return
      }
      const response = await createUserWithEmailAndPassword(auth,email,password)   
      const uid = response.user.uid 
      await setDoc(doc(db, 'usernames', username), {
        userID: uid
      })
      await setDoc(doc(db, 'users', uid), { 
        username,
        userID: uid,
        fullName, 
      })
  
     if(auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: fullName
      })
     }
    return true
    } catch (err: any) {
      toast.error(err.code)  
    } 
  }

  async function logout () {
    await signOut(auth)
  }
export {register, login, logout}  