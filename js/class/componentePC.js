class ComponentePC {
    constructor(pNombre, pPrecio){
        this.nombre = pNombre;
        this.precio = parseInt(pPrecio);
    }
}

// Creo siete objetos de prueba.
const mother = new ComponentePC("Mother Asus", 7800);
const micro = new ComponentePC("Micropocesador Ryzen 3", 25000);
const memoria = new ComponentePC("Memoria Kingston", 9800);
const discoRigido = new ComponentePC("Disco Rigido Western Digital", 6700);
const gabinete = new ComponentePC("Gabinete Cooler Master", 6590);
const fuente = new ComponentePC("Fuente Corsair", 8040);
const lectora = new ComponentePC("Lectora Sony", 3500);

// Agrego los objetos al array componentes y lo guardo en el localStorage.
const componentes = [mother, micro, memoria, discoRigido, gabinete, fuente, lectora];
localStorage.setItem("ComponentesPC", JSON.stringify(componentes));

// Mediante un boton recupero los datos del localStorage, los convierto en un array de objetos y lo recorro para insertarlos en un div
const divComponentes = document.getElementById("divComponentesPC");
const botonCargar = document.getElementById("btnMostrarListado");
botonCargar.addEventListener("click", function() {
    let componentesPC = JSON.parse(localStorage.getItem("ComponentesPC"));

    componentesPC.forEach(componente => {
        divComponentes.innerHTML += `
            <p>Nombre: <strong>${componente.nombre}</strong><p>
            <p>Precio: ${componente.precio}<p>
            <p>---------</p>`;
    });
});
