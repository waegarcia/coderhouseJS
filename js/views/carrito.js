/* Obtengo la lista de items seleccionados en el home para trabajarlos en la pantalla carrito.html */

let seleccionados = JSON.parse(sessionStorage.getItem("Carrito"));

if(seleccionados.length > 0){
    let texto = `Id producto en carrito:<br>`;
    seleccionados.forEach(item => {
        texto += ` Id: ${item};<br>`
        console.log(item);
    });
    $("#carritoContainer").append(texto);
}