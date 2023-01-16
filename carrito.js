
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
        carritoC.innerHTML=""
    })
    header.append(buttonCancel)
    carrito.forEach((elementos)=>{
    let contenidoCarrito= document.createElement("div")
    contenidoCarrito.className="carritoContent"
    contenidoCarrito.innerHTML= `<img src=imgs/${elementos.imagen} class="imagenProductosCarrito" alt="...">
    <h3>${elementos.nombre}</h3>
    <p>$${elementos.precio}</p>
    <span class="cantidadCarrito">Cantidad:${elementos.stock}</span>
    <span> total:${elementos.stock * elementos.precio} </span>
    </div>`
    carritoC.append(contenidoCarrito)
    let eliminarProd = document.createElement("button")
    eliminarProd.className="eliminarProductos"
    eliminarProd.innerText= "Eliminar"
    contenidoCarrito.append(eliminarProd)
    eliminarProd.addEventListener("click", eliminarProducto)
});
const total = carrito.reduce((acc, el)=> acc +  el.precio * el.stock, 0)
const totalhtml= document.createElement('p')
totalhtml.innerHTML = `Total:$${total}`
carritoC.append(totalhtml)

}

imgCarrito.addEventListener("click", pintarCarrito)

 const eliminarProducto = ()=>{
    const buscarId = carrito.find((elementos)=>elementos.id);


    carrito = carrito.filter((carritoid)=>{
        return carritoid !== buscarId;
    });
    guardarLS(carrito)
    pintarCarrito()
};
const guardarLS =  (arr)=>{
    localStorage.setItem("carrito", JSON.stringify(arr))
}