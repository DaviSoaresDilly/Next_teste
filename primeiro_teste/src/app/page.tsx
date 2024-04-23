import "./globals.css";

import NavBar from "./components/core/navbar"

export default function Home() {
  return (
    <div className="App">
      <NavBar
        navbarTitulo = "Codigos de Carreira"
        href = "#codigosdecarreira"
      />
      
    </div>
  );
}