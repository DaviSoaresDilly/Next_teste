import NavBar from "./components/navbar";
import Image from "next/image";
import Section from "./components/sections";
import LinkComponent from "./core/link";

export default function Home() {
  const menu = () => {
    let a = document.getElementById("navbar");
    if (a) {
      if (a.className === "navbar") {
        a.className += " navbar--responsive";
      } else {
        a.className = "navbar";
      }
    }
  };

  return (
    <>
      <div id="home" className="header">
        <Image className="header__logo" width={165} height={57} src="" alt="Logo do Códigos de Carreira" />
      </div>

      <div>
        <NavBar />
      </div>

      <div className="main-container">
        <Section 
          className="introduction" 
          title={<><span>Códigos de Carreira</span><br /><span>Podcast</span></>}
          subtitle={"Um podcast com insights capazes de transformar sua jornada profissional"}
        >
          <div className="music-service">

            <LinkComponent 
              className="music-service__link" 
              href="https://open.spotify.com/show/0rnYFVAu6Pdx2HngU2DD3x?si=4c842f1b76484eea" 
              title="Spotify" 
              target="_blank" 
              alt="" 
            >
              <Image src="assets/images/spotify.webp" height={50} width={195} alt="Logo Apple Music"/>

            </LinkComponent>
          </div>
        </Section>

      </div>
    </>
  );
}
