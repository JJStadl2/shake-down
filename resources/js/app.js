import './bootstrap';
window.addEventListener("DOMContentLoaded", function() {
    console.log('ready');
    function showPassword(id){
        console.log('id in show password: '+id);
        let password = document.getElementById(id);
        if (password.type === "password") {
                password.type = "text";
        } else {
            password.type = "password";
        }
    }
});
