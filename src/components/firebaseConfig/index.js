import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

function StartFirebase(){
  const firebaseConfig = {
    apiKey: "AIzaSyDD7csjgL_KwicF9johIW1wvilubl1WRMM",
    authDomain: "my-react-app-14cc9.firebaseapp.com",
    databaseURL: "https://my-react-app-14cc9-default-rtdb.firebaseio.com",
    projectId: "my-react-app-14cc9",
    storageBucket: "my-react-app-14cc9.appspot.com",
    messagingSenderId: "39986206815",
    appId: "1:39986206815:web:1630df2d0f6da0587ee3ea",
    measurementId: "G-2N8R4B2BJX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



        return getDatabase (app);

}

export default StartFirebase;



    
    

   
