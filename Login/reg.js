// Name and Password from the register-form
var name2 = document.getElementById('name1');
var pw2 = document.getElementById('pw1');

// storing input from register-form
function store() {
    localStorage.setItem('name1', name1.value);
    localStorage.setItem('pw1', pw1.value);
    window.location.href = 'http://127.0.0.1:5500/Trang%20Ch%C3%ADnh/index.html';
}

// check if stored data from register-form is equal to entered data in the   login-form