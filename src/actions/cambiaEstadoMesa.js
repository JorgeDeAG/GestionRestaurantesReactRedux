import { CAMBIA_ESTADO_MESA } from "../constantes/constantes.js";

const cambiaEstadoMesa = id => {
  return {
    type: CAMBIA_ESTADO_MESA,
    id: id
  };
};

export default cambiaEstadoMesa;
