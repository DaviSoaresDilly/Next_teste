import Link from "next/link";

interface NavBarProps {
  navbarTitulo: string;
  href: string;
}

export default function NavBar({navbarTitulo, href}: NavBarProps) {
  return (
    <div id="navbar" className="navbar">
      
      <Link className="navbar__option" href={href}>{navbarTitulo}</Link>
      <a className="navbar__option" href="#donate">Apoie</a>
      <a className="navbar__option" href="#hosts">Hosts</a>
      <a className="navbar__option" href="#footer">Contato</a>
      <a className="navbar__option navbar__option--cta" href="https://anchor.fm/codigosdecarreira" target="_blank">Ouvir</a>

                                {/* //Não entendi o por que existe ja que nunca é chamada onClick="menu()" */}
      <div className="navbar__option navbar__option--icon" /*onClick="menu()"*/>
        <i className="fa fa-bars"></i>
      </div>

    </div>
  );
}