import { INCREMENTA_DINERO_GANADO } from "../constantes/constantes.js";
const dineroGanado = (estado = 0, accion) => {
  switch (accion.type) {
    case INCREMENTA_DINERO_GANADO:
      return estado + accion.cantidad;
    default:
      return estado;
  }
};

export default dineroGanado;
