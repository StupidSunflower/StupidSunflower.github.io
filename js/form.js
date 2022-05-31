let form = document.querySelector('form');
form.onsubmit = function() {
    let email = document.getElementById("email").value;
    alert('Отправить заявку для ' + email + '?');    
    alert('Форма отправлена!');
};