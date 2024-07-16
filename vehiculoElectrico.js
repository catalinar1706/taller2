

class VehiculoElectrico {
    
    constructor(nivelBateria = 100) {
        this.nivelBateria = nivelBateria;
    }

    
    cargarBateria() {
        if (this.nivelBateria < 100) {
            this.nivelBateria++;
            console.log(`Cargando batería: ${this.nivelBateria}%`);
        } else {
            console.log('La batería ya está completamente cargada.');
        }
    }

    
    usarBateria() {
        if (this.nivelBateria > 0) {
            this.nivelBateria--;
            console.log(`Usando batería: ${this.nivelBateria}%`);
        } else {
            console.log('La batería está vacía.');
        }
    }
}


export default VehiculoElectrico;