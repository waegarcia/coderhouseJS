/* Clase ComponentePc y objetos de la clase que luego son agregados a una lista
y guardados en sessionStorage */

const rutaImg = "./img/componentes/";

class ComponentePC {
    constructor(pId, pNombre, pPrecio, pImg){
        this.id = parseInt(pId);
        this.nombre = pNombre;
        this.precio = parseFloat(pPrecio);
        this.img = rutaImg + pImg;
    }
}

// Creo ocho objetos de prueba.
const micro = new ComponentePC(1, "Micropocesador Ryzen 7", 25000.00, "micro1.jpeg");
const mother = new ComponentePC(2, "Mother Gigabyte", 7800.00, "mother2.jpeg");
const memoria = new ComponentePC(3, "Memoria Kingston", 9800.00, "memoria3.jpeg");
const gabinete = new ComponentePC(4, "Gabinete Cooler Master", 6590.00, "gabinete4.jpeg");
const coolerMicro = new ComponentePC(5, "Cooler Microprocesador", 1550.00, "cooler5.jpeg");
const discoRigido = new ComponentePC(6, "Disco Rigido Western Digital", 6700.00, "HDD6.jpeg");
const fuente = new ComponentePC(7, "Fuente Asus rog", 8040.00, "fuente7.jpeg");
const gpu = new ComponentePC(8, "Placa de video MSI", 135000.00, "GPU8.jpeg");

// Agrego los objetos al array componentes y los guardo en sessionStorage.
const listaComponentes = [micro, mother, memoria, gabinete, coolerMicro, discoRigido, fuente, gpu];
sessionStorage.setItem("ComponentesPC", JSON.stringify(listaComponentes));
