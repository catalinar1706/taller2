import VehiculoCombustion from './vehiculoCombustion.js';
import VehiculoElectrico from './vehiculoElectrico.js';

export default class VehiculoHibrido {
    constructor() {
        this.VehiculoElectrico1 = new VehiculoElectrico (50);
        this.VehiculoCombustion1 = new  VehiculoCombustion(80)
    }
    CargarBateria (){
        this.VehiculoElectrico1.cargarBateria()
    }
    usarBateria() {
        this.VehiculoElectrico1.usarBateria();
    }

    llenarTanque() {
        this.VehiculoCombustion1.llenarTanque();
    }

    usarCombustible() {
        this.VehiculoCombustion1.usarCombustible();
    }


    mostrarEstado() {
        console.log("Nivel de la bateria " + this.VehiculoElectrico1.getNivelbateria());
        console.log("Nivel combustible " + this.VehiculoCombustion1.getNivelCombustible());
    }
}