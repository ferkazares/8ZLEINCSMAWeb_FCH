function login(){
    var user, password
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "Fernanda" && password =="2607"){
        alert("Inicio de Sesión valido")
    }else{
        alert("Datos incorrectos")

    }
}
