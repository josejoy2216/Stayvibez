// const { auth } = require("firebase-admin");
const listForm = document.getElementById('list-form');
const uploadInput = document.getElementById('photo')

auth.onAuthStateChanged(user => {
    if(user) {
        console.log('User logged in', user.uid)
        uploading(user.uid);
        saveListData();
    } else {
        console.log('user logged out')
        listForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('You need to be Logged In');
        });
        uploadInput.addEventListener('change', function(e){ 
            alert('You need to be Logged In');
        });
    }
})

function readFile(input) {
    $("#status").html('Processing...');
    counter = input.files.length;
        for(x = 0; x<counter; x++){
            if (input.files && input.files[x]) {

                var reader = new FileReader();

                reader.onload = function (e) {
            $("#photos").append('<div class="col-md-3 col-sm-3 col-xs-3"><img src="'+e.target.result+'" class="img-thumbnail"></div>');
                };

                reader.readAsDataURL(input.files[x]);
            }
    }
    if(counter == x){$("#status").html('');}
}

// saving list data into firestore
function saveListData() {
    listForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        db.collection('partners').add({
            title: listForm.title.value,
            firstName: listForm.fName.value,
            lastName: listForm.lName.value,
            email: listForm.email.value,
            phone: listForm.phone.value,
            location: listForm.location.value,
            propertyType: listForm.type.value,
            parking: listForm.parking.value,
            rooms: listForm.rooms.value,
            pets: listForm.pets.value,
            wifi: listForm.wifi.value,
            pool: listForm.pool.value,
            airCondition: listForm.ac.value,
            essentials: listForm.essentials.value,
            television: listForm.tv.value,
            kitchenAminities: listForm.ka.value,
            firstAidKit: listForm.fak.value,
            staff: listForm.staff.value,
            outdoor: listForm.outdoor.value,
            additionalInfo: listForm.info.value
        }).then(() => {
            // reset form
            listForm.reset();
            window.location.href =  "./index.html"
            alert('Congratulations !! Your Request has been submitted.')
        }).catch(err => {
            alert(err.message);
        });

    })
}

//Listen for file selection
function uploading(userId) {
    uploadInput.addEventListener('change', function(e){ 
        //Get files
        for (var i = 0; i < e.target.files.length; i++) {
            var imageFile = e.target.files[i];
    
            uploadImageAsPromise(imageFile, userId);
        }
    });
}

//Handle waiting to upload each file using promise
function uploadImageAsPromise (imageFile, userId) {
    return new Promise(function (resolve, reject) {
        var storageRef = firebase.storage().ref(userId+"/"+imageFile.name);

        //Upload file
        var task = storageRef.put(imageFile);

        //Update progress bar
        task.on('state_changed',
            function progress(snapshot){
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                var progressBar = document.querySelector('.progress-color')
                progressBar.style.width = percentage + '%';
                progressBar.innerHTML = Math.floor(percentage) + '%';
            },
            function error(err){

            },
            function complete(){
                
            }
        );
    });
}