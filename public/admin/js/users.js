// displaying users
displayUsers();

function displayUsers() {
    db.collection('users').onSnapshot(snapshot => {
        setupUsers(snapshot.docs);
    })
}

// setup users
const accordion = document.querySelector('.accordion');
function setupUsers(data) {
    let html = '';
    if(data.length) {
        data.forEach((doc, index) => {
            const user = doc.data();
            const info = `
            <div class="card">
            <div class="card-header" id="heading${index}">
                <h5 class="mb-0">
                    <button style="outline: none;" class="btn" data-toggle="collapse" data-target="#collapse${index}">${user.Email}</button>
                </h5>
            </div>
            <div class="collapse" id="collapse${index}" data-parent="#accordionExample">
                <div class="card-body">
                    <table class="users-table">
                        <tr><strong>User ID: </strong> <p>${doc.id}</p></tr>
                        <tr><strong>User Email: </strong> <p>${user.Email}</p></tr>
                        <tr><strong>User Phone: </strong> <p>${user.Phone}</p></tr>
                        <tr><strong>User Name: </strong> <p>${user.fName}</p></tr>
                    </table>                                    
                </div>
            </div>
        </div>
            `;
            html += info;
        })
        accordion.innerHTML = html;
    }
}

// search engine
var searchBar = document.querySelector('.search-div');
searchBar.addEventListener('keyup',function(e){
  const term = e.target.value.toLowerCase();
  const users = document.querySelectorAll('.card-header h5 button')
  Array.from(users).forEach(function(user){
    const title = user.textContent;
    if(title.toLowerCase().indexOf(term) != -1){
      user.style.display = "block";
    }
    else {
      user.style.display = "none";
    }
  })
})