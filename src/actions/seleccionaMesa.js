import { SELECCIONA_MESA } from "../constantes/constantes.js";

const seleccionaMesa = id => {
  return {
    type: SELECCIONA_MESA,
    id: id
  };
};

export default seleccionaMesa;
