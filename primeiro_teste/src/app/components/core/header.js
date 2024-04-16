export default function Header() {
  return (
    <header>
      <div id="home" class="header">
        <img class="header__logo" width="165px" height="57px" src="assets/codigos-de-carreira-logo.svg" alt="Logo do Códigos de Carreira" />
      </div>
      <div id="navbar" class="navbar">
        <a class="navbar__option" href="#episodes">Episódios</a>
        <a class="navbar__option" href="#donate">Apoie</a>
        <a class="navbar__option" href="#hosts">Hosts</a>
        <a class="navbar__option" href="#footer">Contato</a>
        <a class="navbar__option navbar__option--cta" href="https://anchor.fm/codigosdecarreira" target="_blank">Ouvir</a>
        <div class="navbar__option navbar__option--icon" onclick="menu()">
          <i class="fa fa-bars"></i>
        </div>
      </div>
    </header>
  );
}