$(document).ready(function () {
    
    // VARIABLES GLOBALES
    let iva = false; // si no se selecciona SI en el radio button entoces no se descuenta el IVA
    let cantCuotas = 1; // si no se selecciona la cantidad de cuotas por default es 1
    let total = 0;
    let montoCuota = 0;

    // FUNCIONES
    // Resta el impuesto IVA del 21% sobre un monto total.
    const quitarIVA = (montoTotal) => {
        const PORCENTAJE_IVA = 21;
        const PORCENTUAL = 100;
        montoTotal = montoTotal - ((montoTotal * PORCENTAJE_IVA) / PORCENTUAL);
        return montoTotal;
    };

    // Calcular valor cuota segun cantidad de cuotas seleccionada.
    const calcCuota = (monto, cuotas) => monto / cuotas;

    /** GALERIA CARRITO */
    // obtengo el listado de la peticion ajax en endpoint.js
    let api = JSON.parse(sessionStorage.getItem("API"));

    // obtengo la lista de items seleccionados en el home
    let seleccionados = JSON.parse(sessionStorage.getItem("Carrito"));

    // comparo ambos listados buscando coincidencias y creo un nuevo array
    let listaSeleccionados = [];
    if(seleccionados.length > 0 && api.length > 0){
        for(let i = 0; i < api.length; i++){
            for(let j = 0; j < seleccionados.length; j++){
                if(api[i].id === seleccionados[j]){
                    listaSeleccionados.push(api[i]);
                };
            };
        };
    };

    // creo las cards de los componentes seleccionados
    let divSeleccionados = ``;
    listaSeleccionados.forEach(componenteSeleccionado => {
        divSeleccionados += `<div class="col" id="componente${componenteSeleccionado.id}" style="display:flex;align-items:center;justify-content:space-between;flex-direction:column;">
                                        <div class="card" style="display:flex;align-items:center;justify-content:center;padding:20px;max-width:50%;">
                                            <img src="${componenteSeleccionado.img}" class="card-img-top" alt="${componenteSeleccionado.nombre}" style="max-width:50%;">
                                            <div class="card-body" id="carrito__precio">
                                                <h3 class="card-title">${componenteSeleccionado.nombre}</h3>
                                                <h5>Precio por unidad: $${componenteSeleccionado.precio}</h5>
                                            </div>
                                            <button type="button" class="btn btn-danger btn-eliminar" id="${componenteSeleccionado.id}">Eliminar</button>
                                        </div>
                                    </div>`;
        total += componenteSeleccionado.precio;
    });
    $("#seleccionados").append(divSeleccionados);


    // funcion para ocultar o mostrar distintos elemtos del DOM
    const transicion = () => {
        $("#seleccionados").hide();
        $("#totales").hide();
        $("#vaciarCarrito").hide();
        $(".escondido").show();
        $("#carritoVacio").fadeIn("fast");
    }

    // boton borrar un componente
    $(".btn-eliminar").click(function(e){
        let componenteEliminar = e.target.id;
        listaSeleccionados.forEach(componente => {
            if(componenteEliminar == componente.id){
                total -= componente.precio;
                $("#componente"+componente.id).hide();
            }
        });
        if(total == 0){
            transicion();
        }
    });

    // boton vaciar carrito
    $("#vaciarCarrito").click(function(e){
        transicion();
        total = 0;
    });

    /** COTIZACION */
    // escucho el radio button del iva para saber si descuento el 21% o no
    $("#iva input").on("change", function(){
        let valorRadioBtnIva = $("[type='radio']:checked").val();
        if (valorRadioBtnIva === "SI") {
            iva = true;
        } else {
            iva = false;
        }
    });

    // boton que ejecuta la cotizacion
    $("#btnEjecutarCotizacion").one("click",function(e){
        $(".btn-eliminar").hide();
        $("#vaciarCarrito").hide();

        // evaluo si se quita el porcentaje del IVA o no
        if(iva){
            total = quitarIVA(total);
        }

        // calculo las cuotas segun la cantidad seleccionada
        cantCuotas = $("#cuota").val();
        montoCuota = parseFloat(calcCuota(total, cantCuotas));

        // muestro el resultado final
        let resultadoTexto = `
        <h4>TOTAL : $${total}</h4>
        <p>El monto de cada cuota es: $${montoCuota}</p>
        <br><br>
        <p><strong>¡MUCHAS GRACIAS POR CONFIAR EN NOSOTROS!</strong></p>
        `;

        $("#resultadoCotizacion").append(resultadoTexto);
        $("#resultadoCotizacion").slideDown(1300);
    });

});
