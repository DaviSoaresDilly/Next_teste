import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LinkProps {
  href: string;
  src?: string;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkComponent({ href, children, className, src, alt }: LinkProps) {
  return (
    <Link href={href} className={className}>{src && <Image src={src} alt={alt}/>}{children}</Link>
  );
}