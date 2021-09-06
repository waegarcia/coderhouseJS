$(document).ready(function () {
    $("#btnAPI").click(function(e){
        e.preventDefault();
        $.get("../js/bd/componentesPC.json", function(respuesta, status){            
            if(status === "success"){
                $.each(respuesta, function(index, componente){
                    $("#divAPI").html($("#divAPI").html() + 
                                        `<div>
                                            <h2>${componente.id}</h2>
                                            <h3>${componente.nombre}</h3>
                                            <p>$${componente.precio}</p>
                                            <hr>
                                        </div>`);
                });
            }
        });
    });
});
