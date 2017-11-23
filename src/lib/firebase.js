import firebase from "firebase"

const config = {
  apiKey: "AIzaSyB1TPBcpd6BFGj-mnIHPgXM_WVx-Ydz114",
  authDomain: "countr-f419a.firebaseapp.com",
  databaseURL: "https://countr-f419a.firebaseio.com",
  projectId: "countr-f419a",
  storageBucket: "countr-f419a.appspot.com",
  messagingSenderId: "845193907026"
}
firebase.initializeApp(config)

export default firebase

export const database = firebase.database()

// Authentication
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()
export const githubAuthProvider = new firebase.auth.GithubAuthProvider()
export const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()
