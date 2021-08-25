class Cotizacion {
    constructor(pMontoFinal, pCantidadCuota, pMontoCuota) {
        this.montoFinal = parseInt(pMontoFinal);
        this.cantidadCuota = parseInt(pCantidadCuota);
        this.montoCuota = parseFloat(pMontoCuota);
    };
    mostrar() {
        return `<p>El monto total es: <strong>$${this.montoFinal}</strong>, cuota/s elegida/s: <strong>${this.cantidadCuota}</strong>, el monto de cada cuota: <strong>$${this.montoCuota}</strong>.</p>`;
    }
};