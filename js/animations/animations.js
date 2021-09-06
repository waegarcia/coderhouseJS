/** INDEX.HTML */
// Animacion para que aparezcan los botones de navegacion del navbar
$("#navbarTogglerDemo03").fadeOut(1, function(){
    $("#navbarTogglerDemo03").fadeIn(2500);
});

// Oculto el boton carrito para que luego aparezca al añadir un componente en galeria.js
$("#btnCarrito").fadeOut(0);

/** CARRITO.HTML */
// animacion boton carrito
$("#btnInnerCarrito").animate({opacity: '0.3'},"slow",function(){
    $("#btnInnerCarrito").animate({opacity: '1'},"slow",function(){
        $("#btnInnerCarrito").animate({opacity: '0.3'},"slow",function(){
            $("#btnInnerCarrito").animate({opacity: '1'},"slow",function(){
                $("#btnInnerCarrito").animate({opacity: '0.3'},"slow",function(){
                    $("#btnInnerCarrito").animate({opacity: '1'},"slow",function(){});
                });
            });
        });
    });
});
