// let savedPIN = "0001";
// const login = ()=>{
//     let ingresar = false;
//     for (let i = 2; i >= 0; i--) {
//     let userPIN = prompt("Ingresa tu pin");
//     if(userPIN == savedPIN){
//         alert("Bienvenido/a Ingreso exitoso");
//         ingresar = true;
//         break;
//     }
//     else{
//         alert("Error, te quedan "+ i + " " + "oportunidades")
//     }
        
//     }
//     return ingresar 
// }
// console.log(login())

// //cuenta
// let exito = login()
// if(exito){
// let saldo = 35000;
// let opcion = " "
// while (opcion != "X") {
// switch (opcion) {
//     case "1":
//         alert("Tu saldo es de $" + saldo)
//         break;
//     case "2":
// let deposito = parseInt(prompt("Ingrese el monto que quiera depositar"))
// saldo = saldo + deposito;
// alert("Tu nuevo saldo es de $" + saldo)
//         break;
//     case "3":
//        let retiro = parseInt(prompt("Ingrese el monto que quiera retirar"))
//        if(retiro <= saldo){
//         saldo = saldo - retiro;
//         alert("retiraste $" + retiro + "Tu saldo es de " + saldo)

//        }
//        else{
//         alert("Saldo insuficiente")
//        } 
//     break;

//     default:
//         alert("Opción no válida")
//         break;
// }
// opcion = " "
// }

// }
let monto = " "
const productos = () => {
    let productos2 = prompt("Inserte un producto \n 1-Pantalón $10.000 \n 2-Remera $6.000 \n 3-Camisa $8.000 \n 4-Buzo $9000")
    switch (productos2) {
        case "1":
            monto = 10000
            
            break;
            case "2":
                monto = 6000
            
                break;
                case "3":
                    monto = 8000
            
            break;
            case "4":
                monto = 9000
            
            break;
        default:
            break;
    }
        
    }
    productos()
    let a = productos;
    if(a){
        let i = prompt("desea agregar otro producto? \n 1-Pantalón $10.000 \n 2-Remera $6.000 \n 3-Camisa $8.000 \n 4-Buzo $9000, escriba esc para negar la pregunta")
        switch (i) {
            case "1":
                monto += 10000
                break;
                case "2":
                    monto += 6000
                
                    break;
                    case "3":
                        monto += 8000
                
                break;
                case "4":
                    monto += 9000
                
                break;
            default:
                break;
        }
    }
        let medios = prompt("cómo prefiere pagarlo? cuotas/efectivo")
        while (medios == "cuotas") {
                let cantidad = prompt("Elija cantidad de cuotas: \n 3 \n 6 \n 9")
                switch (cantidad) {
                    case "3":
                        alert("Deberá abonar 3 cuotas de" + " $" + monto * 1.20 /3 )
                        
                        break;
                        case "6":
                            alert("Deberá abonar 6 cuotas de" + " $" + monto * 1.25 /6 )
                            break;
                            case "9":
                            alert("Deberá abonar 9 cuotas de" + " $" + monto * 1.40 /9)
                
                    default:
                        break;
                }
                break
            }
            if(medios == "efectivo"){
                alert("Su precio final es de"+ " $" + monto)
            }
        console.log(monto)

