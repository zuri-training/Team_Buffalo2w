// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMC-bKTKDlRqugXcMLbvbIlvqyAzpKnWM",
    authDomain: "projectchuckfile.firebaseapp.com",
    projectId: "projectchuckfile",
    storageBucket: "projectchuckfile.appspot.com",
    messagingSenderId: "1084375645923",
    appId: "1:1084375645923:web:5841879e776d4e19050fd6",
    // databaseURL: "https://us-central1.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth and database variables
const auth =  getAuth();
// console.log(auth);
const database = getDatabase(app);
console.log(database);

// Set up the SignUp function
const signupBtn = document.querySelector('.btn_signup');
signupBtn.addEventListener('click', signup);
function signup () {
    // Store all input fields in variables
    const firstName = document.querySelector('#first_name').value;
    const lastName = document.querySelector('#last_name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Move on with Authentication
    createUserWithEmailAndPassword(auth, email, password)
        .then( (userCredential) => {
            // Declare user variable
            const user = userCredential.user;

            // Add user to firebase database
            // Create user data
            set(ref(database, 'users/' + user.uid), {
                firstName: firstName,
                lastName: lastName,
                fullName: firstName + ' ' + lastName,
                email: email,
                lastLogin: Date.now()
            })
            .then(() => {
                // Data saved successfully!
                alert('User created successfully!');
            })
            .catch((error) => {
                // The write failed...
                alert(error);
            });

        })
        .catch( (err) => {
            const errCode = err.code;
            const errMessage =  err.message;

            alert(errMessage);
        })
} 