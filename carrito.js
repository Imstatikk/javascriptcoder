//Funcion para crear el carrito
const pintarCarrito =()=>{
    carritoC.innerHTML="";
    const header = document.createElement("div")
    header.className= "styleHeader"
    header.innerHTML=`<h1 class="titleHeader">CARRITO</h1>`
    carritoC.append(header)
    const buttonCancel= document.createElement("button")
    buttonCancel.innerText="x"
    buttonCancel.className="cancelarCarrito"
    buttonCancel.addEventListener("click",()=>{
        carritoC.innerHTML = "";
    })
    header.append(buttonCancel)
    carrito.forEach((elementos)=>{
    let contenidoCarrito= document.createElement("div")
    contenidoCarrito.className="carritoContent"
    const{imagen, nombre, precio, stock} = elementos
    contenidoCarrito.innerHTML= `<img src=imgs/${imagen} class="imagenProductosCarrito" alt="...">
    <h3>${nombre}</h3>
    <p>$${precio}</p>
    <span class="cantidadCarrito">Cantidad:${stock}</span>
    <span> total:${stock * precio} </span>
    </div>`
    carritoC.append(contenidoCarrito)
    let eliminarProd = document.createElement("button")
    eliminarProd.className="eliminarProductos"
    eliminarProd.innerText= "Eliminar"
    contenidoCarrito.append(eliminarProd)
    eliminarProd.addEventListener("click", eliminarProducto)
});
//Reduce para calcular el total
const total = carrito.reduce((acc, el)=> acc +  el.precio * el.stock, 0)
const totalhtml= document.createElement('p')
totalhtml.innerHTML = `Total:$${total}`
totalhtml.className = "textTotal"

//Boton "Comprar carrito"
const comprarCarrito = document.createElement("button");
comprarCarrito.innerText = "Comprar Carrito"
comprarCarrito.className = "btnComprarCarrito"
comprarCarrito.innerHTML = `<a class= aComprarCarrito href="./formulario.html">Comprar Carrito</a>`
if (carrito.length === 0) {
  comprarCarrito.style.display = "none"

  
}
carritoC.append(totalhtml, comprarCarrito)

}

//Evento para pintar el carrito al clickear la img del mismo
imgCarrito.addEventListener("click", pintarCarrito)

//Funcion para eliminar productos del carrito
 const eliminarProducto = ()=>{
    const buscarId = carrito.find((elementos)=>elementos.id);


    carrito = carrito.filter((carritoid)=>{
        return carritoid !== buscarId;
    });
    guardarLS(carrito)
    contadorRadiusCarrito()
    pintarCarrito()
};
const guardarLS =  (arr)=>{
    localStorage.setItem("carrito", JSON.stringify(arr))
}


//Contador de productos en el carrito
const contadorRadiusCarrito = ()=>{
  contadorCarrito.style.display = "block";
  contadorCarrito.innerText = carrito.length
}

