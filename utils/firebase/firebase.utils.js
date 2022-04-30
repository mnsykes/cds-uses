// create an app instance of firebase
import { initializeApp } from "firebase/app";

// authorization packages
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword
} from "firebase/auth";

// getFirestore creates app instance of db
// doc allows you to retrieve document instance from db
// getDoc and setDoc get and set document data
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// copied from firebase
const firebaseConfig = {
	apiKey: "AIzaSyDvosNnF1B9nqhWiT7V_3H2HT1UUITq35k",
	authDomain: "cds-uses.firebaseapp.com",
	projectId: "cds-uses",
	storageBucket: "cds-uses.appspot.com",
	messagingSenderId: "829056148248",
	appId: "1:829056148248:web:027f81958fad96cf07f46d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
// new GoogleAuthProvider class created from firebase library
const provider = new GoogleAuthProvider();

// configuration object for auth provider

provider.setCustomParameters({
	// Forces account selection even when one account
	// is available.
	prompt: "select_account"
});

// export auth instances
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// export firestore db instances
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
	if (!userAuth) return;

	// doc method takes 3 arguments: db instance, collection, and unique identifier
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);

	// get document for user
	const userSnapshot = await getDoc(userDocRef);

	// exists() method checks for data related to the reference
	// if there is no reference to the user, set a new reference
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation
			});
		} catch (error) {
			console.log("error creating user", error.message);
		}
	}
	// if user data exists return the reference
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};
