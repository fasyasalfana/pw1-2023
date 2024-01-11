let authentication = () =>{
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'fasyasalfana37@gmail.com' && password === 'ibu fatim'){
        window.location.href = 'sucses.html';
        alert('Login Berhasil');
    } else {
        alert('Username atau Password salah')
    }
}