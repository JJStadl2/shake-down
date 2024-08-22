import './bootstrap';
window.addEventListener("DOMContentLoaded", function(e) {

    this.window.showPassword = function showPassword(id){
            let password = document.getElementById(id);
        if (password.type === "password") {
                password.type = "text";
        } else {
            password.type = "password";
        }
    }

    const headers = document.querySelectorAll('.form-collapsible-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const arrow = header.querySelector('.form-arrow');
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                content.style.maxHeight = null;
                content.style.padding = '0 10px';
                arrow.innerHTML = '&#9660';


            } else {
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '10px';
                arrow.innerHTML = '&#9650';
            }
        });
    });

});


