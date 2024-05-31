import Link from "next/link";
import React from "react";

interface NavBarProps {
  links: { path: string; label: string, className?: string }[];
  onclick?: () => void;
};

const NavBar: React.ForwardRefRenderFunction<unknown, NavBarProps> = ({ links, onclick }) => {
  return (
    <nav id="navbar" className="navbar">
      {links.map((link) => (
        <Link key = {link.path} href = {link.path} passHref legacyBehavior>
          <a className = "navbar__option" >{link.label}</a>
        </Link>
      ))}
      <div className = "navbar__option navbar__option--icon" onClick = {onclick}>
        <i className = "fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default React.forwardRef(NavBar); 