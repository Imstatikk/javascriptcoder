const inputPersona = document.querySelector(".inputPersona");
const inputTarjeta = document.querySelector(".inputTarjeta")
const inputDocumento = document.querySelector(".inputDocumento")
const inputCvv = document.querySelector(".inputCvv")
const btnConfirmar = document.querySelector(".btnConfirmar")
const divPersona = document.querySelector(".col-md-6")
const errorInputP = document.querySelector(".errorInputP")
const errorInputT = document.querySelector(".errorInputT")
const errorInputD = document.querySelector(".errorInputD")
const errorInputC = document.querySelector(".errorInputC")
const errorBtn = document.querySelector(".errorBtn")
/*                                                                                           VALIDACIÓN DE INPUTS                                                                                   */
let a = inputPersona.addEventListener("keypress", (evento)=>{
        let charCodePersona = evento.charCode
        
            if ( charCodePersona != 32 && charCodePersona < 65 || charCodePersona >90 && charCodePersona < 97 || charCodePersona >122 ) {
                evento.preventDefault() 
                errorInputP.innerHTML = "*Solo podes usar letras*"
                errorInputP.className = "inputError" 
            }
            else{
              errorInputP.innerHTML =""
            }

    }
        );

inputTarjeta.addEventListener("keypress", (evento)=>{
    let charCodeTarjeta = evento.charCode;

    if (charCodeTarjeta < 48 || charCodeTarjeta > 57) {
        evento.preventDefault()
        errorInputT.innerHTML = "*Solo podes usar números*"
        errorInputT.className = "inputError"

    }
    else if (inputTarjeta.value.length == "16") {
        evento.preventDefault()
}
    else{
        errorInputT.innerHTML = ""
    }

})

inputDocumento.addEventListener("keypress", (evento)=>{
    let charCodeDocumento = evento.charCode;

    if (charCodeDocumento < 48 || charCodeDocumento > 57) {
        evento.preventDefault()
        errorInputD.innerHTML = "*Solo podes usar números*"
        errorInputD.className = "inputError"
    }

    else if (inputDocumento.value.length == "8") {
        evento.preventDefault()
}
else{
  errorInputD.innerHTML = ""
}
})

 inputCvv.addEventListener("keypress", (evento)=>{
    let charCodeCvv= evento.charCode;


    if (charCodeCvv < 48 || charCodeCvv > 57) {
        evento.preventDefault()
        errorInputC.innerHTML = "*Solo podes usar números*"
        errorInputC.className = "inputError"
    }

    else if (inputCvv.value.length == "3") {
        evento.preventDefault()
}
else{
  errorInputC.innerHTML = ""
}

})


// Validación de inputs y código de libreria Sweetalert para después de la compra
btnConfirmar.addEventListener("click",()=>{


  if (inputCvv.value === "" || inputDocumento.value ===  ""|| inputTarjeta.value === "" || inputPersona.value === "") {
    errorBtn.innerHTML="*Todos los campos son requeridos*"
    errorBtn.className="errorBtn"

  }
  else if(inputCvv.value.length < "3" || inputDocumento.value.length < "8" || inputTarjeta.value.length < "16" ){
    errorBtn.innerHTML="*Todos los campos son requeridos*"
    errorBtn.className="errorBtn"
  }


  else{
    errorBtn.innerHTML=""
    Swal.fire({
        title: `Está seguro que quiere realizar su compra?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        confirmButtonColor: "#008000",
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire( "Su compra fue realizada con éxito!", "", 'success')
          localStorage.removeItem("carrito")
        } else if (result.isDenied) {
          Swal.fire('Su compra no ha sido realizada', '', 'info')
        }
      })
  }
})
