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
inputPersona.addEventListener("keypress", (evento)=>{
        let charCodePersona = evento.charCode
        
            if ( charCodePersona != 32 && charCodePersona < 65 || charCodePersona >90 && charCodePersona < 97 || charCodePersona >122 ) {
                evento.preventDefault() 
                btnConfirmar.className = "btnBlock"
                errorBtn.className="errorBtn"
                errorInputP.innerHTML = "*Solo podes usar letras*"
                errorInputP.className = "inputError" 
            }
            else{
                errorInputP.innerHTML= ""
                btnConfirmar.className ="btnEnable"
                btnConfirmar.className ="btn btn-primary"
                
            }
        
    }
        )
;
inputTarjeta.addEventListener("keypress", (evento)=>{
    let charCodeTarjeta = evento.charCode;
    if (inputTarjeta.value.length < "15"){
        btnConfirmar.className = "btnBlock"}

        else{
            btnConfirmar.className ="btnEnable"
            btnConfirmar.className ="btn btn-primary"
            errorInputT.innerHTML= ""
        }

    if (charCodeTarjeta < 48 || charCodeTarjeta > 57) {
        evento.preventDefault()
        errorInputT.innerHTML = "*Solo podes usar números*"
        errorInputT.className = "inputError"

    }
    else{
        errorInputT.innerHTML = ""
    }

    if (inputTarjeta.value.length > "15") {
        evento.preventDefault()
}
})

inputDocumento.addEventListener("keypress", (evento)=>{
    let charCodeDocumento = evento.charCode;
    if (inputDocumento.value.length < "7") {
        btnConfirmar.className = "btnBlock"
        errorBtn.className="errorBtn" 
    }

    else{
        btnConfirmar.className ="btnEnable"
        btnConfirmar.className ="btn btn-primary"
        errorBtn.innerHTML= ""
    }

    if (charCodeDocumento < 48 || charCodeDocumento > 57) {
        evento.preventDefault()
        errorInputD.innerHTML = "*Solo podes usar números*"
        errorInputD.className = "inputError"
    }

    if (inputDocumento.value.length >= "8") {
        evento.preventDefault()
}})

 inputCvv.addEventListener("keypress", (evento)=>{
    let charCodeCvv= evento.charCode;

    if (inputCvv.value.length < "2") {
        btnConfirmar.className = "btnBlock"
    errorBtn.className="errorBtn"
    }

    else{
        btnConfirmar.className ="btnEnable"
        btnConfirmar.className ="btn btn-primary"
        errorBtn.innerHTML= ""
    }

    if (charCodeCvv < 48 || charCodeCvv > 57) {
        evento.preventDefault()
        errorInputC.innerHTML = "*Solo podes usar números*"
        errorInputC.className = "inputError"
    }

    if (inputCvv.value.length >= "3") {
        evento.preventDefault()
}

})


// Validación de inputs y código de libreria Sweetalert para después de la compra
btnConfirmar.addEventListener("click",()=>{

  if (inputCvv.value === "" || inputDocumento.value ===  ""|| inputTarjeta.value === "" || inputPersona.value === "") {
    errorBtn.innerHTML="Todos los campos son requeridos"
    errorBtn.className="errorBtn"
    
  }
  else{
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
        } else if (result.isDenied) {
          Swal.fire('Su compra no ha sido realizada', '', 'info')
        }
      })
  }
})
