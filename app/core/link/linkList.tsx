import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LinkListProps {
  links: { path: string; label: string; className?: string }[];
}

const LinkList: React.ForwardRefRenderFunction<unknown, LinkListProps> = ({
  links,
}) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.path}>
          <Link href={link.path} passHref>
            <a className={link.className}>{link.label}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export { LinkList };
