import { combineReducers } from "redux";

import mesaSeleccionada from "./mesaSeleccionada.js";
import datosEstadoMesa from "./datosEstadoMesa.js";
import datosMesa from "./datosMesa.js";
import dineroGanado from "./dineroGanado.js";

const reducer = combineReducers({
  mesaSeleccionada,
  datosEstadoMesa,
  datosMesa,
  dineroGanado
});

export default reducer;
