export default class VehiculoCombustion {
    constructor(nivelCombustible) {
        this.nivelCombustible = nivelCombustible;
    }

    llenarTanque() {
        console.log("El tanque se esta llenando " + this.nivelCombustible + "%");
    }

    usarCombustible() {
        console.log("El uso  de Combustible va en " + this.nivelCombustible + "%");
    }
    getNivelCombustible() {
        return this.nivelCombustible;
    }

}