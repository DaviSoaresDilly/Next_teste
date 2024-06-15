import Link from 'next/link';
import React, { ReactNode } from 'react';

interface LinkListProps {
  links: { path: string; label: string; className?: string }[];
}

const LinkUnic: React.ForwardRefRenderFunction<unknown, LinkListProps> = ({
  links,
}) => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.path} href={link.path} passHref>
          <a className={link.className}>{link.label}</a>
        </Link>
      ))}
    </>
  );
};

export { LinkUnic };
