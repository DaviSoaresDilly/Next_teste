import React from "react";
import ComponenteLink from "../core/link";

export default function NavBar() {
  return (
    <nav id="navbar" className="navbar">
      <ComponenteLink href="/" className="navbar__option" alt={"ir para pagina inicial"}>Home</ComponenteLink>
      <ComponenteLink href="/sobre" className="navbar__option" alt={"ir para pagina sobre"}>Sobre</ComponenteLink>
      <ComponenteLink href="/contato" className="navbar__option" alt={"ir para a pagina contato"}>Contato</ComponenteLink>
    </nav>
  );
}