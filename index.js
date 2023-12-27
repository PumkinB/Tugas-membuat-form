

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

const nameInput = document.getElementById('username');
const dateInput = document.getElementById('tanggal');
const messageInput = document.getElementById('pesan');

function kirimForm () {
    const name = nameInput.value;
    const date = dateInput.value;
    const sexInput = document.querySelector('input[name ="sex"]:checked');
    const sex = sexInput ? sexInput.value : '';
    const message = messageInput.value;

    if (name.length < 3){
        alert('Masukkan nama');
        return;
    }

    if (!date){
        alert('Masukkan tanggal lahir');
        return;
    }

    if (!sex) {
        alert('Pilih jenis kelamin');
        return;
    }

    if (message.length < 10){
        alert('Masukkan pesan minimal 10 karakter');
        return;
    }

    alert('Terima kasih sudah daftar di website kami!');
    location.reload();

}