import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
	apiKey: "AIzaSyDAt7osy8vR0vN2fMZOnNEBECmMYdwlEac",
    authDomain: "aquasensorem.firebaseapp.com",
    databaseURL: "https://aquasensorem.firebaseio.com",
    projectId: "aquasensorem",
    storageBucket: "aquasensorem.appspot.com",
    messagingSenderId: "912071081548"
};
  
class Firebase {

	constructor() {
		app.initializeApp(config);
		this.auth = app.auth();
		this.db = app.database();
	}

	// *** Auth API ***
	doCreateUserWithEmailAndPassword = (email, password) =>
	this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
	this.auth.signInWithEmailAndPassword(email, password);

	doSignOut = () => this.auth.signOut();
}
  
export default Firebase;