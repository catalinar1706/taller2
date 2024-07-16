


class VehiculoCombustion {
    
    constructor(nivelCombustible = 100) {
        this.nivelCombustible = nivelCombustible;
    }

   
    llenarTanque() {
        if (this.nivelCombustible < 100) {
            this.nivelCombustible++;
            console.log(`Llenando tanque: ${this.nivelCombustible}%`);
        } else {
            console.log('El tanque ya está lleno.');
        }
    }

   
    usarCombustible() {
        if (this.nivelCombustible > 0) {
            this.nivelCombustible--;
            console.log(`Usando combustible: ${this.nivelCombustible}%`);
        } else {
            console.log('El tanque está vacío.');
        }
    }
}


export default VehiculoCombustion;