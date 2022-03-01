import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// project imports
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';
import 'assets/scss/style.scss';
import './index.scss'
import { collection, set } from '@firebase/firestore';

//firebase dependencies
import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { doc, setDoc } from "@firebase/firestore";

//firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAKQow7DIylH2AlYryqUtoYGZY9wHlizU",
    authDomain: "rebolt-c97b2.firebaseapp.com",
    databaseURL: "https://rebolt-c97b2-default-rtdb.firebaseio.com",
    projectId: "rebolt-c97b2",
    storageBucket: "rebolt-c97b2.appspot.com",
    messagingSenderId: "986328607881",
    appId: "1:986328607881:web:359e779ef5af68de1d6a58",
    measurementId: "G-6K032EYTDC"
};

//initializing firebase app and analytics
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const user = auth.currentUser;


//authentication functions
const provider = new GoogleAuthProvider();

const signinwithgoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem("userid", user.uid)
            localStorage.setItem("useremail", user.email)
            localStorage.setItem("username", user.displayName)
            localStorage.setItem("userphoto", user.photoURL)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
}

const signoutwithgoogle = () => {
    auth.signOut();
}


const uid = localStorage.getItem('userid')
const email = localStorage.getItem('useremail')
const name = localStorage.getItem('username')
const photo = localStorage.getItem('userphoto')





ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
export { user, auth, signinwithgoogle, signoutwithgoogle, db };
export { uid, email, name, photo }
