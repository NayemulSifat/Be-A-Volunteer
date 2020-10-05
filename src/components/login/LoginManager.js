// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase.config";

// export const initializeLoginFrameWork = () => {
//     if (firebase.apps.length === 0) {
//       firebase.initializeApp(firebaseConfig);
//     }
//   }

//   export const googleSignInPopUp = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     return firebase.auth().signInWithPopup(provider)
//       .then(res => {
//         const newUser = res.user;
//         return newUser;
//       }).catch(error => {
//         const newUser = {};
//         newUser.message = error.message;
//         return newUser;
//       });

//   }

  
//   export const createUserWithEmailAndPassword = (name, email, password) => {
//     return firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then(res => {
//         const newUser = res.user;
//         newUser.message = 'Account Created Successfully';
//         updateUserInfo(name);
//         return newUser;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   const updateUserInfo = name => {
//     const user = firebase.auth().currentUser;
  
//     user.updateProfile({
//       displayName: name
//     })
//       .then(response => {
//         console.log('update user name');
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }
  