import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBLdYx2_aDjpfLRPrw1Ibq8NEs7dCyvcI8',
  authDomain: "food-app-7f6a9.firebaseapp.com",
  databaseURL: "https://food-app-7f6a9.firebaseio.com",
  projectId: "food-app-7f6a9",
  storageBucket: "food-app-7f6a9.appspot.com",
  messagingSenderId: "1063459469183"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
