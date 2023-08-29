import React from "react";
import NavBar from "./components/NavBar";
import "./styles.css";
import "./components/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
}
export default App;
