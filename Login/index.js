
    
    function check() {

        // stored data from the register-form
        var storedName = localStorage.getItem('name1');
        var storedPw = localStorage.getItem('pw1');
    
        // entered data from the login-form
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');
    
        // check if stored data from register-form is equal to data from login form
        if(userName.value == storedName && userPw.value == storedPw) {
            alert('You are loged in.');
            window.location.href = 'http://127.0.0.1:5500/Trang%20Ch%C3%ADnh/index.html'
        }else {
            alert('Username or password is not correct, please try again.');
        }
    }
  

    
