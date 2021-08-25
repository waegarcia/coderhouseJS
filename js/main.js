/** DESAFIO COMPLEMENTARIO: Generar HTML */

/* DECLARO VARIABLES GLOBALES */
// variables.
let monto = 0;
let cantCuotas = 0;
let valorCuota = 0;
let productos = [];

//Variables DOM
let montoTotal = document.getElementById("montoAlMomento"); 
let ivaEstado = document.getElementById("iva");
let montoFinal = document.getElementById("montoFinal");

// Mensajes.
let msjBienvenida = "Bienvenido al simulador interactivo. Este programa es un cotizador para la compra de componentes de PC.";
let msjDespedida = "Gracias por utilizar el Simulador Interactivo. Adios!";
let msjError = "Error! Saliendo del Simulador Interactivo...";

/* SIMULADOR INICIO */
alert(msjBienvenida);
// Ingreso valor de los productos.
let rtaProdFlujo = prompt("Queres ingresar un producto? (SI/NO)");
let rtaProdValor = 0;
while (rtaProdFlujo.toUpperCase() == "SI") {
    rtaProdValor = parseInt(prompt("Por favor ingresa el valor del producto."));
    while (isNaN(rtaProdValor) || rtaProdValor <= 0) {
        rtaProdValor = parseInt(prompt("Por favor ingresa el valor del producto. (Solo en valor numerico y mayor a cero)"));
    }

    productos.push(rtaProdValor);

    rtaProdFlujo = prompt("Queres ingresar un nuevo producto? (SI/NO)");
};

if(productos.length > 0){
    // Muestro todos los productos cargados y los acumula en la variable monto
    monto = sumarProductos(productos);

    // Muestro el array con el ordenamiento de menor a mayor precio.
    document.getElementById("btnMayorAMenor").addEventListener("click", function(){
        ordenarDeMenorAMayorPrecio(productos)
    });
};

// Si el monto es mayor a cero continua el programa, caso contrario muestra el error y termina.
if (monto > 0) {

    // Muestro el total hasta el momento.
    montoTotal.innerHTML = `<p>El monto total de los productos ingresados es: <strong>$${monto}</strong>.</p>`;

    // Pregunto si se necesita factura A. En caso afirmativo se quita el 21% del IVA.
    let rtaIvaFlujo = prompt("Necesita factura A? (SI/NO)");
    if (rtaIvaFlujo.toUpperCase() == "SI") {
        monto = quitarIVA(monto);
    } else {
        ivaEstado.innerHTML = `No se descontara el IVA.`;
    }

    // Pregunto si se desea cuotificar el monto
    let rtaCuotasFlujo = prompt("Desea cuotificar el monto total? (SI/NO)");
    if (rtaCuotasFlujo.toUpperCase() == "SI") {

        // Pregunto cantidad de cuotas.
        let rtaCantCuotas = parseInt(prompt("Por favor ingresa la cantidad de cuotas."));
        while (isNaN(rtaCantCuotas) || rtaCantCuotas <= 0) {
            rtaCantCuotas = parseInt(prompt("Por favor ingresa la cantidad de cuotas. (Solo en valor numerico y distinto de cero)"));
        }
        cantCuotas = rtaCantCuotas;

        // Calculo el valor de la cuota segun la cantidad elegida.
        valorCuota = parseFloat(calcCuota(monto, cantCuotas));

        // Creo el objeto cotizacionUno en base a la clase Cotizacion una vez que tengo todos los valores para el constructor
        const cotizacionUno = new Cotizacion(monto, cantCuotas, valorCuota);
        // Utilizo un metodo de la clase
        montoFinal.innerHTML = cotizacionUno.mostrar();

    } else {
        montoFinal.innerHTML = `<p>El pago unico es de: <strong>$${monto}</strong>.</p>`;
    }

    // Mensaje de despedida y fin del programa.
    saludar(msjDespedida);

} else {
    // Mensaje en el caso de que el usuario no quiera ingresar al simulador
    if(rtaProdFlujo.toUpperCase() == "NO"){
        saludar(msjDespedida);
    } else {
        saludar(msjError);
    }
};