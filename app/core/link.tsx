import React from 'react';
import Link from 'next/link';

interface LinkProps {
    href: string;
    label: string;
    className?: string;
}

/* componente funcional */
const myLink: React.FC<LinkProps> = ({ href, label, className }) => {
    return (
        <Link href={href}>
            <a className={className || "link"}>{label}</a>
        </Link>
    );
} 

export default myLink;