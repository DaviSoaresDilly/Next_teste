import Link from "next/link";
import React from "react";

interface LinkListProps {
  links: { path: string; label: string, className?: string }[];
};

const LinkList: React.ForwardRefRenderFunction<unknown, LinkListProps> = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.path}>
          <Link href={link.path} passHref legacyBehavior>
            <a className="navbar__option" >{link.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default React.forwardRef(LinkList);