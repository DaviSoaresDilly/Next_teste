import React from "react";

interface SectionProps {
  titles: React.ReactNode[];
  subtitle?: string;
  paragraphs?: React.ReactNode[];
  className?: React.ReactNode[];
  children?: React.ReactNode;
  id?: string;
  role?: string;
  ariaLabel?: string;
};

export default function Section({ titles, subtitle, paragraphs, className, children, ...rest }: SectionProps) {
  return (
    <section {...rest} className = {`${className || ''} ${className ? className + "__section__text" : ''}`}>
      <div className = {`${className}__section`}>
        {titles.map((title: React.ReactNode, index: number) => (
          <h1 key = {index} className = {`${className}__section__title`}>{title}</h1>
        ))}
        {subtitle && <h2 className = {`${className}__section__subtitle`}>{subtitle}</h2>}
        {paragraphs && paragraphs.map((paragraph: React.ReactNode, index: number) => (
          <p key = {index} className = {`${className}__section__paragraph`}>{paragraph}</p>
        ))}
      </div>
      {children}
    </section>
  );
};
