import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string; 
  onClick: () => void;
  className?: string;
  disabled?: boolean; 
  id?: string; 
  type?: "button" | "submit" | "reset"; 
  ariaLabel?: string;
  imageSrc?: string;
};

export default function Button({text, onClick, className, disabled, id, type, ariaLabel, imageSrc}: ButtonProps) {
  return (
    <button
      id={id}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      aria-label={ariaLabel}
    >
      {imageSrc ? <Image src={imageSrc} alt={ariaLabel || 'button image'} /> : text}
    </button>
  );
};
