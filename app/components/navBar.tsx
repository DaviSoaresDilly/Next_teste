import Link, { LinkProps } from "next/link";
import React from "react";

interface NavBarProps {
    navItems: LinkProps[]; // Array de itens da barra de navegação
    navbarTitulo?: string; // Título da barra de navegação
    className?: string; // Classe CSS personalizada para a barra de navegação
}

const NavBar: React.FC<NavBarProps> = ({ navItems, navbarTitulo, className }) => {
    return (
        <nav className={className || "navbar"}>
            {navbarTitulo && <h1 className= "navbar__titulo">{navbarTitulo}</h1>}
            <ul>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <Link {...item} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;