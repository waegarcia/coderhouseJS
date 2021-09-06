/* Validaciones en el formulario de contacto */

let contactoForm = $("#contactoForm");
let datosOK = false;

function enviarDatosContacto(e){

    e.preventDefault();
    validarFormulario();

    if(datosOK) {
        // Animacion para que aparezca el modal de OK si se completaron todos los datos del formulario
        $("#modalOK").modal("show").slideDown(1000);

        $("#contactoInputNombre").val("");
        $("#contactoInputMail").val("");
        $("#contactoTextArea").val("");
    }
}

function validarFormulario(){

    let contactoInputNombre = $("#contactoInputNombre").val();
    let contactoInputMail = $("#contactoInputMail").val();
    let contactoTextArea = $("#contactoTextArea").val();

    if(contactoInputNombre == "" || contactoInputMail == "" || contactoTextArea == ""){
        // Animacion para que aparezca el modal de error si falta completar datos del formulario
        $("#modalFAIL").modal("show").slideDown("fast");
        datosOK = false;

    }else{
        datosOK = true;
    }
}

$(contactoForm).submit(enviarDatosContacto);

