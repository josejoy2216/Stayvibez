// display Partners
displayPartners();

function displayPartners() {
    db.collection('non-verified').onSnapshot(snapshot => {
        setupPartners(snapshot.docs);
    });
}

// setup partners
const accordion = document.querySelector('.accordion');
function setupPartners(data) {
    let html = '';
    if(data.length) {
        data.forEach((doc, index) => {
            const partner = doc.data();
            const info = `
            <div class="card">
            <div class="card-header" id="heading${index}">
                <h5 class="mb-0">
                    <button style="outline: none;" class="btn" data-toggle="collapse" data-target="#collapse${index}">${partner.email}</button>
                </h5>
            </div>
            <div class="collapse" id="collapse${index}" data-parent="#accordionExample">
                <div class="card-body">
                    <table class="allPartners-table">
                        <tr><strong>Farm House Name: </strong> <p><input type="text" disabled class="text-box" name="title" id="title" value="${partner.title}"></p></tr>
                        <tr><strong>Partner User ID: </strong> <p><input type="text" disabled class="text-box" name="id" id="id" value="${doc.id}"></p></tr>
                        <tr><strong>Partner First Name: </strong> <p><input type="text" disabled class="text-box" name="fname" id="fname" value="${partner.firstName}"></p></tr>
                        <tr><strong>Partner Last Name: </strong> <p><input type="text" disabled class="text-box" name="lname" id="lname" value="${partner.lastName}"></p></tr>
                        <tr><strong>Partner Email: </strong> <p><input type="text" disabled class="text-box" name="email" id="email" value="${partner.email}"></p></tr>
                        <tr><strong>Partner Phone: </strong> <p><input type="text" disabled class="text-box" name="phone" id="phone" value="${partner.phone}"></p></tr>
                        <tr><strong>Partner Location: </strong> <p><input type="text" disabled class="text-box" name="location" id="location" value="${partner.location}"></p></tr>
                        <tr><strong>Essentials: </strong> <p><input type="text" disabled class="text-box" name="essentials" id="essentials" value="${partner.essentials}"></p></tr>
                        <tr><strong>Pets: </strong> <p><input type="text" disabled class="text-box" name="pets" id="pets" value="${partner.pets}"></p></tr>
                        <tr><strong>Air Condition: </strong> <p><input type="text" disabled class="text-box" name="ac" id="ac" value="${partner.airCondition}"></p></tr>
                        <tr><strong>Pool: </strong> <p><input type="text" disabled class="text-box" name="pool" id="pool" value="${partner.pool}"></p></tr>
                        <tr><strong>Rooms: </strong> <p><input type="text" disabled class="text-box" name="rooms" id="rooms" value="${partner.rooms}"></p></tr>
                        <tr><strong>Staff: </strong> <p><input type="text" disabled class="text-box" name="staff" id="staff" value="${partner.staff}"></p></tr>
                        <tr><strong>Kitchen Aminities: </strong> <p><input type="text" disabled class="text-box" name="ka" id="ka" value="${partner.kitchenAminities}"></p></tr>
                        <tr><strong>First Aid Kit: </strong> <p><input type="text" disabled class="text-box" name="fak" id="fak" value="${partner.firstAidKit}"></p></tr>
                        <tr><strong>Outdoor: </strong> <p><input type="text" disabled class="text-box" name="outdoor" id="outdoor" value="${partner.outdoor}"></p></tr>
                        <tr><strong>Television: </strong> <p><input type="text" disabled class="text-box" name="tv" id="tv" value="${partner.television}"></p></tr>
                        <tr><strong>Wifi: </strong> <p><input type="text" disabled class="text-box" name="wifi" id="wifi" value="${partner.wifi}"></p></tr>
                        <tr><strong>Parking: </strong> <p><input type="text" disabled class="text-box" name="parking" id="parking" value="${partner.parking}"></p></tr>
                        <tr><strong>Property Type: </strong> <p><input type="text" disabled class="text-box" name="type" id="type" value="${partner.propertyType}"></p></tr>
                        <tr><strong>Additional Info: </strong> <p><input type="text" disabled class="text-box" name="info" id="info" value="${partner.additionalInfo}"></p></tr>
                    </table>
                    <button style="outline: none;" class="btn btn-primary" id="edit">Edit</button>
                    <button style="outline: none;" class="btn btn-primary hide" id="update">Update</button>
                    <button style="outline: none;" class="btn btn-success" id="verify">Verify</button>
                    <button style="outline: none;" class="btn btn-danger" id="dont-verify">Delete</button>
                </div>
            </div>
        </div>
            `;
            html += info;
        })
        accordion.innerHTML = html;
        const editBtn = document.querySelectorAll('#edit');
		const updateBtn = document.querySelectorAll('#update');
		const inputTag = document.querySelectorAll('.text-box')

        editBtn.forEach(edit => {
            edit.addEventListener('click', () => {
                inputTag.forEach(input => {
                    input.disabled = false;
                })
                edit.classList.add('hide');
                updateBtn.forEach(update => {
                    update.classList.remove('hide');
                })
            })
        })

        updateBtn.forEach(update => {
            update.addEventListener('click', () => {
                inputTag.forEach(input => {
                    input.disabled = true;
                })
                editBtn.forEach(edit => {
                    edit.classList.remove('hide');
                })
                update.classList.add('hide');
            })
        })
    }
}

// search engine
var searchBar = document.querySelector('#partnerSearch');
searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const partners = document.querySelectorAll('.card-header h5 button')
  Array.from(partners).forEach((partner) => {
    const title = partner.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      partner.style.display = "block";
    }
    else {
      partner.style.display = "none";
    }
  })
})