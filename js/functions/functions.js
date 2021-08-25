// Resta el impuesto IVA del 21% sobre un monto total.
const quitarIVA = (montoTotal) => {
    const IVA = 21;
    const PORCENTUAL = 100;
    montoTotal = montoTotal - ((montoTotal * IVA) / PORCENTUAL);
    ivaEstado.innerHTML = `<p>Se quito el IVA, el nuevo monto es <strong>$${montoTotal}</strong>.</p>`;
    return montoTotal;
};

// Calcular valor cuota segun cantidad de cuotas seleccionada.
const calcCuota = (monto, cuotas) => monto / cuotas;

// Recorre y muestra todos los items de un array, luego los acumula en el monto total.
const sumarProductos = (lista) => {
    let productosIngresados = `<ol>`;
    let montoTotal = 0;
    for (let i = 0; i < lista.length; i++) {
        productosIngresados += `<li>Producto numero <strong>${i+1}</strong>, con valor: <strong>$${lista[i]}</strong>.</li>`;
        montoTotal += lista[i];
    }
    productosIngresados += `</ol>`;
    document.getElementById("prodIngresados").innerHTML = productosIngresados;
    return montoTotal;
};

// Declaro la funcion que va a ordenar de menor a mayor los precios.
const ordenarDeMenorAMayorPrecio = (listado) => {
    let productosOrdenados = `<ul>`;
    let nuevaLista = listado.map(lista => lista);
    nuevaLista.sort((componente1, componente2) => componente1 - componente2);
    nuevaLista.forEach(function(itemPrecio, indice){
        productosOrdenados += `<li>Producto numero <strong>${indice+1}</strong>, con valor: <strong>$${itemPrecio}</strong>.</li>`;
    });
    productosOrdenados += `</ul>`;
    document.getElementById("prodMayorAMenor").innerHTML = productosOrdenados;
};

// saludo al salir del simulador
const saludar = (pSaludo) => {
    let saludoFinal = document.createElement("div");
    saludoFinal.innerHTML = `<p>${pSaludo}</p>`;
    document.body.appendChild(saludoFinal);
};
