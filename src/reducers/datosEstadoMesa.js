import { CAMBIA_ESTADO_MESA } from "../constantes/constantes.js";

var datosInicialesMesa = new Array(16).fill(false);

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
