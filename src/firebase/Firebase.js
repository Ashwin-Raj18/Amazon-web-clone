import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey            : 'AIzaSyCyawLOl6M1IpUqYwCSqdnN_gt0dgBzBe0',
	authDomain        : 'web-app-amzn184.firebaseapp.com',
	databaseURL       : 'https://web-app-amzn184.firebaseio.com',
	projectId         : 'web-app-amzn184',
	storageBucket     : 'web-app-amzn184.appspot.com',
	messagingSenderId : '1046858814863',
	appId             : '1:1046858814863:web:8afbfd137266c24b5527fa',
	measurementId     : 'G-BN3Q2GT3B9'
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
