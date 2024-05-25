import NavBar from "./components/navbar";
import Image from "next/image";
import Section from "./components/sections";
import React from "react";
import LinkList from "./core/linkList";

export default function Home() {

  const menu = () => {
    let a = document.getElementById("navbar");
    if (a) {
      if ("navbar" === a.className) {
        a.className += " navbar--responsive";
      } else {
        a.className = "navbar";
      }
    }
  };
  
  return (
    <body>
      <div id="home" className="header">
        <Image className="header__logo" width={165} height={57} src="/assets/images/codigos-de-carreira-logo.svg" alt="Logo do Códigos de Carreira" />
      </div>

      
      <NavBar links={[
          { path: "#home", label: "Home" },
          { path: "#sobre", label: "Sobre" },
          { path: "#episodios", label: "Episódios" },
          { path: "#contato", label: "Contato" },
          { path: "https://anchor.fm/codigosdecarreira", label: "Ouvir", className: "navbar__option--cta"}
        ]}
        //onclick={menu} 
      />
      

      <div className="main-container">
        <Section 

          titles={["Códigos de Carreira", "Podcast"]}
          subtitle={"Um podcast com insights capazes de transformar sua jornada profissional"}
          className="introduction"

        >

          <LinkList links={[
            
            

          ]}/>

        </Section>

      </div>
    </body>
  );
}
