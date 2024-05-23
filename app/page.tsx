import NavBar from "./components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div id="home" className="header">
        <Image className="header__logo" width={165} height={57} src="assets\images\codigos-de-carreira-logo.svg" alt="Logo do Códigos de Carreira" />
      </div>

      <div>
        <NavBar />
      </div>

      <div className="main-container">
        
      </div>
    </>
  );
}
