import './bootstrap';
document.addEventListener("DOMContentLoaded", function(e) {
    console.log('ready');
    function showPassword(){
        console.log('id in show password: ');
        let password = document.getElementById('inputPassword');
        if (password.type === "password") {
                password.type = "text";
        } else {
            password.type = "password";
        }
    }
});


