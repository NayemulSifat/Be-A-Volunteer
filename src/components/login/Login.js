import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';




const Login = () => {

    const style = {
        container: {
            textAlign: 'center',
            padding: '80px',
            border: '1px solid black',
            width: '20%',
            borderRadius: '5px',
            margin: 'auto',
            marginTop: '90px'

        },
        button: {
            backgroundColor: 'white', 
            border: '1px solid blue',
            borderRadius: '30px',
            padding: '10px',
            width: '100%',
            alignItems: 'center'

        }

    }

    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/newvolunteer/:id" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                const { displayName, email } = res.user;
                const signedInUser = {
                    name: displayName,
                    email: email
                }
                setloggedInUser(signedInUser);
                storeAuthToken();
                history.replace(from);
            })
    }
    
    firebase.auth().signOut().then(function() {})
      .catch(function(error) {});

      
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
            .then(function (idToken) {
                sessionStorage.setItem('token', idToken)
            }).catch(function (error) {
                // Handle error
            });
    }

    return (
        <div style={style.container}>
            <h2>Login With</h2>
            <button onClick={handleGoogleSignIn} style={style.button} > <img style={{height: '20px', width: '20px'}} src={'https://i.ibb.co/Jjt6XRw/google.png'} alt="Google"/> Continue with Google</button><br /><br />
            <span>Don't have an account?<Link>Create a new account</Link></span>

        </div>
    );
};

export default Login;