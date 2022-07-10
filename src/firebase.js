import { initializeApp } from 'firebase/app'
import {
    getAuth, GoogleAuthProvider, GithubAuthProvider,
    signInWithPopup, signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBMY75i-1vaxBxHaVR5dPlUwI0U_Bt9iV4",
    authDomain: "polyusd-chaining.firebaseapp.com",
    projectId: "polyusd-chaining",
    storageBucket: "polyusd-chaining.appspot.com",
    messagingSenderId: "409577213288",
    appId: "1:409577213288:web:46fafb348d530d43065add",
    measurementId: "G-H8KNR0NH60"
};

const errorMap = {
    'auth/invalid-email': 'Invalid email address',
    'auth/user-disabled': 'Your account is inactive',
    'auth/user-not-found': 'Invalid login credentials',
    'auth/wrong-password': 'Invalid login credentials',
    'auth/popup-closed-by-user': 'You have cancelled the operation',
    'auth/account-exists-with-different-credential': 'Your email address is already associated with an account. Try to sign in with another provider.',
}

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function extractUserInfo(user) {
    return {
        uid: user.uid,
        name: user.displayName,
        avatar: user.photoURL,
        providerId: user.providerId,
    }
}

async function signIntoProvider(provider) {
    try {
        const result = await signInWithPopup(auth, provider);
        return extractUserInfo(result.user);
    } catch (e) {
        if (e.code in errorMap) {
            throw errorMap[e.code];
        }
        throw e.message;
    }
}

export async function signInWithGoogle() {
    let provider = new GoogleAuthProvider();
    return signIntoProvider(provider);
}

export async function signInWithGitHub() {
    let provider = new GithubAuthProvider();
    return signIntoProvider(provider);
}

export async function passwordSignIn(email, password) {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return extractUserInfo(result.user);
    } catch (e) {
        if (e.code in errorMap) {
            throw errorMap[e.code];
        }
        throw e.message;
    }
}

export async function logout() {
    await signOut(auth);
}

export { app, auth };