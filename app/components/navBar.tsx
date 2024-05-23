'use client';

import React from "react";
import LinkComponents from "../core/link";

export default function NavBar() {
  function menu(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <nav id="navbar" className="navbar">
      <LinkComponents href="/" className="navbar__option" alt={"ir para pagina inicial"}>Home</LinkComponents>
      <LinkComponents href="/sobre" className="navbar__option" alt={"ir para pagina sobre"}>Sobre</LinkComponents>
      <LinkComponents href="/contato" className="navbar__option" alt={"ir para a pagina contato"}>Contato</LinkComponents>

      <div className="navbar__option navbar__option--icon" onClick={() => menu()}>
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
}