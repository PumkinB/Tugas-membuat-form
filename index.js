

const form = document.getElementById("myForm");
const error = [];

form.addEventListener("submit", function(e) {
    e.preventDefault()

    var username = document.getElementById("username");
    var tanggal = document.getElementById("tanggal");
    var success = ""

    if(username.value == ""){
        error.push("Please isi nama dulu");
    }
    
    if(tanggal.value == ""){
        error.push("isi tanggal tempat lahir dulu");
    }
    alert("Form is submitted");

    var message = document.getElementById ("message");
    message.innerText = error

});

