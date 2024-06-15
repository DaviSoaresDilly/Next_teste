import Image from 'next/image';
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function ImageComponent({
  src,
  alt,
  width,
  height,
  className,
}: ImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

export { ImageComponent };
