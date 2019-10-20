import { AGREGA_PRODUCTO_MESA } from "../constantes/constantes.js";

const agregaProductoMesa = (nombre, precio, id) => {
  return {
    type: AGREGA_PRODUCTO_MESA,
    idMesa: id,
    producto: {
      nombre: nombre,
      precio: precio
    }
  };
};

export default agregaProductoMesa;
