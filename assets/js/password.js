function checkPassword() {
    var pwd1 = document.getElementById("sel1").value;
    var pwd2 = document.getElementById("sel2").value;
    var pwd3 = document.getElementById("sel3").value;
    var pwd= pwd1 + pwd2 + pwd3;
    if (pwd == "911") {
        document.getElementById("message").innerHTML = "Password 1 es correcto";
    } else {
        if (pwd == "714") {
            document.getElementById("message").innerHTML = "Password 2 es correcto";
        } else {
             document.getElementById("message").innerHTML = "Password incorrecto";
        }
    }
 
};

