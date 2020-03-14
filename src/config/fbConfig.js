import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
import 'firebase/auth'


export const fbConfig = {
    apiKey: "AIzaSyD-7dW8PjfOE5v4Ot2v4P3elXN49Z2Tbz8",
    authDomain: "stock-app-62121.firebaseapp.com",
    databaseURL: "https://stock-app-62121.firebaseio.com",
    projectId: "stock-app-62121",
    storageBucket: "stock-app-62121.appspot.com",
    messagingSenderId: "1078983091471",
    appId: "1:1078983091471:web:7e94cd3fd1fd35d3dbca7a",
    measurementId: "G-45319DRTFC"
  };

  firebase.initializeApp(fbConfig)
  firebase.analytics()
  firebase.firestore()
  
  
  export default firebase
  