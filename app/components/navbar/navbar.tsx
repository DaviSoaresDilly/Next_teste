'use client';

import Link from 'next/link';
import React from 'react';
import classNames from 'classnames';

interface NavBarProps {
  links: {
    path: string;
    label: string;
    className?: React.ReactNode[];
    target?: string;
  }[];
  onClickHandler?: () => void;
  customClass?: string;
}

const NavBar: React.ForwardRefRenderFunction<unknown, NavBarProps> = ({
  links,
  onClickHandler,
  customClass = '',
}) => {
  return (
    <nav id="navbar" className={customClass}>
      {links.map((link) => (
        <Link key={link.path} href={link.path} passHref legacyBehavior>
          <a className={classNames(link.className)}>{link.label}</a>
        </Link>
      ))}
      <div
        className="navbar__option navbar__option--icon"
        onClick={onClickHandler}
      >
        <i className="fa fa-bars"></i>
      </div>
    </nav>
  );
};

export default React.forwardRef(NavBar);
