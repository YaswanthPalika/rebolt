import { useSelector } from 'react-redux';

//mui imports
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';


// ==============================|| APP ||============================== //


import { initializeApp } from "@firebase/app";
import { getAnalytics } from "@firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { doc, setDoc } from "@firebase/firestore";
import { collection, set } from '@firebase/firestore';


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

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themes(customization)}>
                    <CssBaseline />
                    <NavigationScroll>
                        <Routes />
                    </NavigationScroll>
                </ThemeProvider>
            </StyledEngineProvider>
        </>
    );
};

export default App;
