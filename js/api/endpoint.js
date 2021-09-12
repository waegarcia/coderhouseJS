$(document).ready(function () {
    $.get("./js/bd/componentesPC.json", function(respuesta, status){            
        if(status === "success"){
            sessionStorage.setItem("API", JSON.stringify(respuesta));
        }
    });
});
