//Llamados
const busqueda = document.querySelector(".form-control")
const contenedor = document.querySelector("#contenedorProductos")
const imgCarrito = document.querySelector("#clickCarrito")
const carritoC = document.querySelector("#carritoCompras")
const contHTML = document.querySelector("header")
const contadorCarrito = document.querySelector(".contadorCarrito")
//Objetos
 const productos =[
    {
        id: 1,
        nombre: "pantalón",
        precio: 8500,
        img: "pantalon.jpg",
        stock: 1,
    },
{
    id: 2,
    nombre: "remera",
    precio: 6000, 
    img: "remera.jpg",
    stock: 1,

},
{
    id: 3,
    nombre: "bermuda",
    precio: 7000,
    img: "bermuda.jpeg",
    stock: 1,

},
{
    id: 4,
    nombre: "buzo",
    precio: 10000,
    img: "buzo.jpg",
    stock: 1,

}

]


let carrito= JSON.parse(localStorage.getItem("carrito")) || [];

 productos.forEach((elementos)=>{
    const {img, nombre, precio, id,stock} = elementos 
    let contenido = document.createElement("div");
    contenido.innerHTML=`<img src=imgs/${img} class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">${nombre.toUpperCase()}</h5>
     <h6 class="precio">$${precio}</h6>
     `
  contenedor.append(contenido)
  contenido.className= "card"


  let comprar = document.createElement("button");
  comprar.innerText = "Comprar";
  comprar.className = "btn";
  contenido.append(comprar);
  comprar.addEventListener("click", ()=>{
    const repeticion = carrito.some((repetirProducto)=> repetirProducto.id === id);
    if(repeticion){
        carrito.map((producto)=>{
            if(producto.id === id){
                producto.stock++;
            }
            
        })
    }else{
    carrito.push({
        id: id,
        nombre: nombre,
        imagen: img,
        precio: precio,
        stock: stock,
    })
    guardarLS(carrito)
}  

contadorRadiusCarrito()
  });
  
});


fetch("./data/data.json")
.then((response) => response.json())
.then((data)=>{
    console.log(data);
});
