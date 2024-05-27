import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string; 
  onClick?: () => void;
  url?: string;
  className?: string;
  disabled?: boolean; 
  id?: string; 
  type?: "button" | "submit" | "reset"; 
  ariaLabel?: string;
  imageSrc?: string;
};

export default function Button({text, url, onClick, className, disabled, id, type, ariaLabel, imageSrc}: ButtonProps) {
  
  const handleClick = () => {
    window.open(url)
  }
  
  return (
    <button
      id={id}
      className={`btn ${className}`}
      onClick={handleClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      {imageSrc ? <Image src={imageSrc} alt={ariaLabel || 'button image'} /> : text}
    </button>
  );
};
