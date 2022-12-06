let savedPIN = "0001";
const login = ()=>{
    let ingresar = false;
    for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu pin");
    if(userPIN == savedPIN){
        alert("Bienvenido/a Ingreso exitoso");
        ingresar = true;
        break;
    }
    else{
        alert("Error, te quedan "+ i + " " + "oportunidades")
    }
        
    }
    return ingresar 
}
console.log(login())

