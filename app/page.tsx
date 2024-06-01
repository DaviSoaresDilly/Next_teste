"use client";

import NavBar from "./components/navbar";
import Image from "next/image";
import Section from "./components/sections";
import React, {useState} from "react";
import {LinkList, LinkUnic} from "./core/link";
import Button from "./core/button";

export default function Home() {

  const [navbarClass, setNavbarClass] = useState("navbar");
    
  const menu = () => {
      if (navbarClass === "navbar") {
        setNavbarClass("navbar navbar--responsive");
      } else {
        setNavbarClass("navbar");
      }
  };
  
  return (
    <html>
      <body>
        <div id = "home" className = "header">
          <Image className = "header__logo" width = {165} height = {57} src = "/assets/images/codigos-de-carreira-logo.svg" alt = "Logo do Códigos de Carreira" />
        </div>

        
        <NavBar links = {[
            { path: "#home", label: "Home" },
            { path: "#sobre", label: "Sobre" },
            { path: "#episodios", label: "Episódios" },
            { path: "#contato", label: "Contato" },
            { path: "https://anchor.fm/codigosdecarreira", label: "Ouvir", className: "navbar__option--cta"}
          ]}
          onClickHandler={menu} 
          customClass={navbarClass}
        />
        

        <div className = "main-container">
          <Section 

            titles = {["Códigos de Carreira", "Podcast"]}
            subtitle = {"Um podcast com insights capazes de transformar sua jornada profissional"}
            className = {["introduction"]}

          >

            <LinkList links = {[
              
              

            ]}/>

            <Button 
              imageSrc="/assets/images/spotify.webp"
              width={200}
              height={50}
              className = "music-service"
              ariaLabel = "Ouvir no Spotify"
              href = {"https://open.spotify.com/show/0rnYFVAu6Pdx2HngU2DD3x?si=4c842f1b76484eea"}
              type="button"
            />

          </Section>

          

        </div>
      </body>
    </html>
  );
}
