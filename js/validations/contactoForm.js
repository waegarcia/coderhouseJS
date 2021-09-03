/* Validaciones en el formulario de contacto */

let contactoForm = $("#contactoForm");
let datosOK = false;

function enviarDatosContacto(e){

    e.preventDefault();
    validarFormulario();

    if(datosOK) {
        $("#modalOK").modal("show");

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
        $("#modalFAIL").modal("show");
        datosOK = false;

    }else{
        datosOK = true;
    }
}

$(contactoForm).submit(enviarDatosContacto);

