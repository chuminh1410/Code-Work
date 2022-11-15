function validate() {
    var u = document.getElementById("username").value;
    var p1 = document.getElementById("password").value;

    if(u== "") {
        alert("vui lòng nhập tài khoản")
    return false;}
    else if(u=="dangnhapspotify"){
        
        
     
    }
    else{
        alert("thông tin không chính xác")
        return false;
    }
  
    
    if(p1 == "") {
    alert("vui lòng nhập mật khẩu");
    return false;
    }
    else if(p1=="123456789"){
        window.location.href = '/path'
        alert("thông tin chính xác!")
        return true;
        
        }
        else{
            alert("thông tin không chính xác")
        }
        return false;
    }
    
    function check() {

        // stored data from the register-form
        var storedName = localStorage.getItem('name1');
        var storedPw = localStorage.getItem('pw');
    
        // entered data from the login-form
        var userName = document.getElementById('userName');
        var userPw = document.getElementById('userPw');
    
        // check if stored data from register-form is equal to data from login form
        if(userName.value == storedName && userPw.value == storedPw) {
            alert('You are loged in.');
        }else {
            alert('ERROR.');
        }
    }
  

    
