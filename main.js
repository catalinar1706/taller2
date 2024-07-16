import VehiculoHibrido from './vehiculoHibrido.js';

let vehiculoHibrido = new VehiculoHibrido(80, 50);

console.log(`Estado inicial:`);
vehiculoHibrido.mostrarEstado();

vehiculoHibrido.cargarBateria();
vehiculoHibrido.usarBateria();
vehiculoHibrido.llenarTanque();
vehiculoHibrido.usarCombustible();

console.log(`Estado final:`);
vehiculoHibrido.mostrarEstado();