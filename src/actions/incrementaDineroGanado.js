import { INCREMENTA_DINERO_GANADO } from "../constantes/constantes.js";

const incrementaDineroGanado = cantidad => {
  return {
    type: INCREMENTA_DINERO_GANADO,
    cantidad: cantidad
  };
};

export default incrementaDineroGanado;
