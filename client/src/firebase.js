import firebase from "firebase/compat/app"
import { getAuth } from 'firebase/auth'

import { getFirestore } from "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDbfa7dZsxiOxh-t_LV7ZGpNvW9J_LNaFs",
    authDomain: "auth-dv.firebaseapp.com",
    projectId: "auth-dv",
    storageBucket: "auth-dv.appspot.com",
    messagingSenderId: "1049240338547",
    appId: "1:1049240338547:web:2f18dd698e057047e56a06"
})

export const db = getFirestore(app)

export const auth = getAuth(app)

export default app