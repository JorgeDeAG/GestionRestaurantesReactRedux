import { ELIMINA_PRODUCTO_MESA } from "../constantes/constantes.js";

const eliminaProductoMesa = (idMesa, id) => {
  return {
    type: ELIMINA_PRODUCTO_MESA,
    idMesa: idMesa,
    id: id
  };
};

export default eliminaProductoMesa;
