// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    loginForm.reset();
    window.location.href = './index.html'
    alert('You have been successfully Logged In !!')
  }).catch(err => {
    console.log(err.message);
  });

});