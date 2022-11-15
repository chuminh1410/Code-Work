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
    
  

    
