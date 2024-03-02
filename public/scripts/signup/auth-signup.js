const signupForm = document.querySelector('#signup-form');
//signup method
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    return db.collection('users').doc(cred.user.uid).set({
        Email: signupForm['signup-email'].value,
        Phone: signupForm['signup-number'].value,
        fName: signupForm['signup-name'].value
    });
    console.log(cred.user);
  }).then(() => {
      // close the signup modal & reset form
    signupForm.reset();
    window.location.href = './login.html';
    alert('Congrats !! You have been successfully registered !!')
  }).catch(err => {
      console.log(err.message);
  });
});