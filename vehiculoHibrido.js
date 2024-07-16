import VehiculoElectrico from './vehiculoElectrico.js';
import VehiculoCombustion from './vehiculoCombustion.js';

export default class VehiculoHibrido extends VehiculoElectrico {
    constructor(nivelBateria = 100, nivelCombustible = 100) {
        super(nivelBateria);
        this.vehiculoCombustion = new VehiculoCombustion(nivelCombustible);
    }

    llenarTanque() {
        this.vehiculoCombustion.llenarTanque();
    }

    usarCombustible() {
        this.vehiculoCombustion.usarCombustible();
    }

    mostrarEstado() {
        console.log(`Nivel de batería: ${this.nivelBateria}%`);
        console.log(`Nivel de combustible: ${this.vehiculoCombustion.nivelCombustible}%`);
    }
}