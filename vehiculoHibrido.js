import VehiculoElectrico from './vehiculoElectrico.js';
import VehiculoCombustion from './vehiculoCombustion.js';


class VehiculoHibrido {
   
    constructor(nivelBateria = 100, nivelCombustible = 100) {
        
        this.vehiculoElectrico = new VehiculoElectrico(nivelBateria);
        this.vehiculoCombustion = new VehiculoCombustion(nivelCombustible);
    }

    
    cargarBateria() {
        this.vehiculoElectrico.cargarBateria();
    }

    usarBateria() {
        this.vehiculoElectrico.usarBateria();
    }

    llenarTanque() {
        this.vehiculoCombustion.llenarTanque();
    }

    usarCombustible() {
        this.vehiculoCombustion.usarCombustible();
    }

    
    mostrarEstado() {
        console.log(`Nivel de batería: ${this.vehiculoElectrico.nivelBateria}%`);
        console.log(`Nivel de combustible: ${this.vehiculoCombustion.nivelCombustible}%`);
    }
}


export default VehiculoHibrido;