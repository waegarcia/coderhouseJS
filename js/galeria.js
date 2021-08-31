let divGaleria = $("#galeria");
let componentesPC = JSON.parse(localStorage.getItem("ComponentesPC"));

let divComponente = ``;
componentesPC.forEach(componente => {
    divComponente += `<div class="col">
                <div class="card" data-aos="zoom-out-up" data-aos-duration="1000">
                    <a href="./pages/carrito.html"><img src="${componente.img}" class="card-img-top"
                            alt="${componente.nombre}"></a>
                    <div class="card-body">
                        <h5 class="card-title">${componente.nombre}</h5>
                        <h4>$${componente.precio}</h4>
                    </div>
                </div>
            </div>`;
});

$(divGaleria).append(divComponente);
