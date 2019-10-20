import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./reducers/reducer.js";
import agregaProductoMesa from "./actions/agregaProductoMesa.js";
import eliminaProductoMesa from "./actions/eliminaProdcutoMesa.js";
import incrementaDineroGanado from "./actions/incrementaDineroGanado.js";
import seleccionaMesa from "./actions/seleccionaMesa.js";
import cambiaEstadoMesa from "./actions/cambiaEstadoMesa.js";

import "./styles.css";

var store = createStore(reducer);

const getmesaSeleccionada = () => {
  var state = store.getState();
  return state.mesaSeleccionada;
};

const getAvailableTables = () => {
  var state = store.getState();
  var tablesAvailable = 0;

  for (let i = 0; i < state.datosEstadoMesa.length; i++) {
    if (state.datosEstadoMesa[i] === true) tablesAvailable++;
  }
  return tablesAvailable;
};
const getdatosEstadoMesa = () => {
  var state = store.getState();
  return state.datosEstadoMesa;
};

const getTableItems = () => {
  var state = store.getState();

  if (getmesaSeleccionada() === null) var tableItems = [];
  else var tableItems = state.datosMesa[getmesaSeleccionada()];
  return tableItems;
};

const getTotalBill = () => {
  var tableItems = getTableItems();
  var totalBill = 0;
  for (let i = 0; i < tableItems.length; i++) {
    totalBill += tableItems[i].precio;
  }
  return totalBill;
};

const getDineroGanado = () => {
  var state = store.getState();
  return state.dineroGanado;
};

const checkOut = () => {
  var totalBill = getTotalBill();
  store.dispatch(incrementaDineroGanado(totalBill));
  store.dispatch(cambiaEstadoMesa(getmesaSeleccionada()));
};

store.subscribe(() => {
  console.log(`Selected Table: ${getmesaSeleccionada()}`);
  console.log(`Tables Available: ${getAvailableTables()} / 16`);
  console.log(`Table Availability Status: ${getdatosEstadoMesa()}`);
  console.log(`Selected Table Items List:`, getTableItems());
  console.log(`Selected Table Bill: $${getTotalBill()}`);
  console.log(`Total Dinero Ganado: $${getDineroGanado()}`);
  console.log();
});

//test dispatched actions

//select and toggle table 0, add items
//select and toggle table 1, add items
//check out current selected table
//select table 0
store.dispatch(seleccionaMesa(0));
store.dispatch(cambiaEstadoMesa(0));
store.dispatch(agregaProductoMesa("apples", 2, 0));
store.dispatch(agregaProductoMesa("bananas", 3, 0));
store.dispatch(eliminaProductoMesa(0, 1));

store.dispatch(seleccionaMesa(1));
store.dispatch(cambiaEstadoMesa(1));
store.dispatch(agregaProductoMesa("apples", 2, 1));
store.dispatch(agregaProductoMesa("bananas", 3, 1));
store.dispatch(agregaProductoMesa("carrots", 4, 1));
checkOut();
store.dispatch(seleccionaMesa(0));

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
