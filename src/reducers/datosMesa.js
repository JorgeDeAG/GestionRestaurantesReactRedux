import {
  AGREGA_PRODUCTO_MESA,
  ELIMINA_PRODUCTO_MESA,
  CAMBIA_ESTADO_MESA
} from "../constantes/constantes.js";

var datosInicialesMesa = [];

for (let i = 0; i < 16; i++) {
  datosInicialesMesa.push([]);
}

const datosMesa = (estado = datosInicialesMesa, accion) => {
  switch (accion.type) {
    case AGREGA_PRODUCTO_MESA:
      var copiaEstado = [];
      for (let i = 0; i < 16; i++) {
        copiaEstado.push(estado[i].slice());
      }
      copiaEstado[accion.idMesa].push(accion.producto);
      return copiaEstado;
    case ELIMINA_PRODUCTO_MESA:
      var copiaEstado = [];
      for (let i = 0; i < 16; i++) {
        copiaEstado.push(estado[i].slice());
      }
      copiaEstado[accion.idMesa].splice(accion.id, 1);
    case CAMBIA_ESTADO_MESA:
      var copiaEstado = [];
      for (let i = 0; i < 16; i++) {
        copiaEstado.push(estado[i].slice());
      }
      copiaEstado[accion.id] = [];
      return copiaEstado;
    default:
      return estado;
  }
};

export default datosMesa;
