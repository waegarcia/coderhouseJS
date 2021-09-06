/* Obtengo el listado de objetos de la clase ComponentePC del sessionStorage
    y lo renderizo en el div con id = galeria.
    Cada componente tiene un boton que permite añadir ese componente al carrito de compras.
    Al clickear el boton "Carrito" los componentes añadidos se guardan en una lista y esa lista va al sessionStorage.
*/

let divGaleria = $("#galeria");
let componentesPC = JSON.parse(sessionStorage.getItem("ComponentesPC"));

let divComponente = ``;
componentesPC.forEach(componente => {
    divComponente += `<div class="col">
                        <div class="card" data-aos="zoom-out-up" data-aos-duration="1000">
                            <img src="${componente.img}" class="card-img-top" alt="${componente.nombre}">
                            <div class="card-body">
                                <h3 class="card-title">${componente.nombre}</h3>
                                <h4>$${componente.precio}</h4>
                                <button class="btn btn__componente" type="button" id="${componente.id}">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>`;
});

$(divGaleria).append(divComponente);

let carrito = [];
$(".btn__componente").one("click", function(e){
    e.preventDefault();
    $(e.target).append(
        ` <i class="fa fa-shopping-cart"></i>`
    );
    carrito.push(parseInt(e.target.id));

    // animacion para que aparezca el boton carrito si se añade un componente
    $("#btnCarrito").slideDown("slow");
});

// añadir la lista carrito cuando hago click en el boton carrito
$("#btnCarrito").click(function(){
    sessionStorage.setItem("Carrito", JSON.stringify(carrito));
});
