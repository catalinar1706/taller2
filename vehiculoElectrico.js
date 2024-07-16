export default class VehiculoElectrico {
    constructor(nivelBateria) {
      this.nivelBateria = nivelBateria; 
    }
  
    cargarBateria() {
      console.log("cargarBateria " + this.nivelBateria);
    }
  
    usarBateria(cantidad) {
      console.log("usarBateria " + this.nivelBateria);
    }
    getNivelbateria() {
      return this.nivelBateria
    }
  }