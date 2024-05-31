import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  text?: string; 
  href: string;
  className?: string;
  disabled?: boolean; 
  id?: string; 
  type?: "button" | "submit" | "reset"; 
  ariaLabel?: string;
  imageSrc?: string;
  button__link?: string;
  width: number;
  height: number;
};

export default function Button({text, className, disabled, id, type, ariaLabel, button__link, href, imageSrc, width, height}: ButtonProps) {
  
  return (
    <button
      id = {id}
      className = {className}
      disabled = {disabled}
      type = {type}
    >
      {button__link ? <Link href = {href}><a className = {`${className}__link`}>{text}</a></Link> : text}
      {imageSrc && <Image src = {imageSrc} className = {`${className}__image`} alt = {ariaLabel || 'button image'} width={width} height={height} />}
    </button>
  );
};