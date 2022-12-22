
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    
    
   
  
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
   
  } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBW7-SmW1qSLkS2d4J3aOuSfUh73OIF2gU",
  authDomain: "react-movie-app2.firebaseapp.com",
  projectId: "react-movie-app2",
  storageBucket: "react-movie-app2.appspot.com",
  messagingSenderId: "1079319683000",
  appId: "1:1079319683000:web:5a07062ed7a308f3cb794d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// Create new account using email/password

 export const createUser = async (email, password, displayName) => {
  
  
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      const currentUser = getAuth().currentUser;
      await currentUser.updateProfile({ displayName });
    }
    catch(error) {
      console.log(`There was an error: ${error}`)

      
      
    }  

  }

  // Monitor auth state
// const monitorAuthState = async () => {
//     onAuthStateChanged(auth, user => {
//       if (user) {
//         console.log(user)
//         showApp()
//         showLoginState(user)
  
//         hideLoginError()
//         hideLinkError()
//       }
//       else {
//         showLoginForm()
//         lblAuthState.innerHTML = `You're not logged in.`
//       }
//     })
//   }
  


// Login using email/password

export const signIn = async (email, password) => {
  
  
    // step 1: try doing this w/o error handling, and then add try/catch
    await signInWithEmailAndPassword(auth, email, password)
  
    // step 2: add error handling
    try {
      await signInWithEmailAndPassword(auth, email, password)
    }
    catch(error) {
      console.log(`There was an error: ${error}`)
      
    }
  }

  export const signOut = async () => {
    await signOut(auth);
  }

  export const userObserver = async (setCurrentUser) => {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        // User is signed out
        setCurrentUser(null);
      }
    });
  };
  
  export const signUpProvider = () => {
    var provider = new getAuth().GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    getAuth().signInWithPopup(provider);
  };
  
  export const forgotPassword = (email) => {
    getAuth().sendPasswordResetEmail(email);
  
    alert("Please check your mail box!");
  };
 
//   connectAuthEmulator(auth, "http://localhost:9099");

//   monitorAuthState();
  
  export default app;
