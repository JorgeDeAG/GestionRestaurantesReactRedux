import { CAMBIA_ESTADO_MESA } from "../constantes/constantes.js";

var datosInicialesMesa = [];
for (let i = 0; i < 16; i++) {
  datosInicialesMesa.push([]);
}

const datosEstadoMesa = (estado = datosInicialesMesa, accion) => {
  switch (accion.type) {
    case CAMBIA_ESTADO_MESA:
      var copiaEstado = estado.slice();
      copiaEstado[accion.id] = !copiaEstado[accion.id];
      return copiaEstado;
    default:
      return estado;
  }
};

export default datosEstadoMesa;
