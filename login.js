const firebaseConfig = {
  apiKey: "AIzaSyAyi0zlA3Wo5vEMb171FsEoRAHBTnVR2O8",
  authDomain: "odop-30d6a.firebaseapp.com",
  projectId: "odop-30d6a",
  storageBucket: "odop-30d6a.firebasestorage.app",
  messagingSenderId: "1018085349508",
  appId: "1:1018085349508:web:2d22dfa0b6165371b08ad1",
  measurementId: "G-ERYT5ZX9R2"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Form logic
const authBtn = document.getElementById('authBtn');
const toggleForm = document.getElementById('toggleForm');
const formTitle = document.getElementById('formTitle');
const message = document.getElementById('message');
let isSignIn = true;

toggleForm.addEventListener('click', () => {
  isSignIn = !isSignIn;
  formTitle.textContent = isSignIn ? 'Sign In' : 'Sign Up';
  authBtn.textContent = isSignIn ? 'Sign In' : 'Sign Up';
  toggleForm.textContent = isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In";
  message.textContent = '';
});

authBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (!email || !password) {
    message.textContent = "Please enter email and password.";
    return;
  }

  if (isSignIn) {
    auth.signInWithEmailAndPassword(email, password)
      .then(user => {
        message.style.color = "green";
        message.textContent = "Login successful!";
        // Redirect to dashboard if needed
      })
      .catch(error => {
        message.style.color = "red";
        message.textContent = error.message;
      });
  } else {
    auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        message.style.color = "green";
        message.textContent = "Account created successfully!";
      })
      .catch(error => {
        message.style.color = "red";
        message.textContent = error.message;
      });
  }
});
