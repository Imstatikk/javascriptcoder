//funcion para interes de cuotas
const impuestoCuotas = (precio,impuesto,cantidadCuotas) => {
    precio = precio + (precio * impuesto)/100
    precio = precio/cantidadCuotas
    return precio
}
//función constructora para productos

function producto (nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.stockDisponible = (cantidad) =>{
        if(cantidad <= this.stock){
            this.stock = this.stock - cantidad
        }
        else{
            alert("Sin stock")
            
        }
        
    }
    
}
const pantalon = new producto ("Pantalón", 10000, 5)
const remera = new producto ("Remera", 6000, 4)
const camisa = new producto ("Camisa", 8000, 6)
const buzo = new producto ("Buzo", 9000, 7)
let cantidadUnidades = " "
let monto = " "

    let productos2 = prompt("Inserte un producto \n 1-Pantalón $10.000 \n 2-Remera $6.000 \n 3-Camisa $8.000 \n 4-Buzo $9000")
    switch (productos2) {
        case "1":
            monto = pantalon.precio
            pantalon.stockDisponible(cantidad = prompt("Cuantas unidades?"))
            monto = monto * cantidad;
            break;
            case "2":
                monto = remera.precio
                remera.stockDisponible(cantidad = prompt("Cuantas unidades?"))
            monto = monto * cantidad;
                break;
                case "3":
                monto = camisa.precio
            camisa.stockDisponible(cantidad = prompt("Cuantas unidades?"))
            monto = monto * cantidad;
            break;
            case "4":
                monto = buzo.precio
             buzo.stockDisponible(cantidad = prompt("Cuantas unidades?"))
            monto = monto * cantidad;
                
        default:
            break;
    }
        
    let i = prompt("desea agregar otro producto?  si / no")
        
        while (i == "si" ) {
           let a = prompt(" 1-Pantalón $10.000 \n 2-Remera $6.000 \n 3-Camisa $8.000 \n 4-Buzo $9000, escriba esc para negar la pregunta o para finalizar la operación")
            switch (a) {
                case "1":
                    monto += pantalon.precio
               
                    break;
                    case "2":
                        monto += remera.precio
                    
                        break;
                        case "3":
                            monto += camisa.precio
                   
                    
                    break;
                    case "4":
                        monto += buzo.precio
                    
                    break;
                default:
                    break;
            }
           if(a == "esc"){
            let medios = prompt("cómo prefiere pagarlo? cuotas/efectivo")
        if (medios == "cuotas") {
                let cantidad = prompt("Elija cantidad de cuotas: \n 3 \n 6 \n 9")
                switch (cantidad) {
                    case "3":
                        alert("Deberá abonar 3 cuotas de" + " $" + impuestoCuotas(monto, 10, 3) )
                        
                        break;
                        case "6":
                            alert("Deberá abonar 6 cuotas de" + " $" + impuestoCuotas(monto, 20, 6) )
                            break;
                            case "9":
                            alert("Deberá abonar 9 cuotas de" + " $" + impuestoCuotas(monto, 30, 9))
                
                    default:
                        break;
                }
                break
            }
            else if(medios == "efectivo"){
                alert("Su precio final es de"+ " $" + monto)
                break
            }
            
            else{
                "Operación errónea"
                break
            }
           }
            
        }
    
        console.log(monto)