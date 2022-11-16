// Name and Password from the register-form
var name2 = document.getElementById('name1');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('name1', name2.value);
    localStorage.setItem('pw', pw.value);
    window.location.href = 'http://127.0.0.1:5500/Trang%20Ch%C3%ADnh/index.html'
}

// check if stored data from register-form is equal to entered data in the   login-form