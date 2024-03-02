let loginBtn = document.querySelectorAll('.login');
let logoutBtn = document.querySelectorAll('.logout');
let profileBtn = document.querySelectorAll('.pro');

auth.onAuthStateChanged(user => {
    if(user) {
        loginBtn.forEach(btn => btn.style.display = 'none')
        logoutBtn.forEach(btn => btn.style.display = 'initial')
        profileBtn.forEach(btn => btn.style.display = 'initial')
        console.log('User Logged In')
    } else {
        loginBtn.forEach(btn => btn.style.display = 'initial')
        logoutBtn.forEach(btn => btn.style.display = 'none')
        profileBtn.forEach(btn => btn.style.display = 'none')
        console.log('User Logged Out')
    }
})

// logout
logoutBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        auth.signOut().then(() => {
            window.location.href = './index.html'
            alert("You've been successfully Logged Out !!")
        }).catch(err => alert(err.message));
      });
})