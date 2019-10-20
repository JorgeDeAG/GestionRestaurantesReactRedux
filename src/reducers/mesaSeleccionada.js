import { SELECCIONA_MESA } from "../constantes/constantes.js";

const mesaSeleccionada = (estado = null, accion) => {
  switch (accion.type) {
    case SELECCIONA_MESA:
      if (estado === accion.id) return null;
      else return accion.id;
    default:
      return estado;
  }
};

export default mesaSeleccionada;
