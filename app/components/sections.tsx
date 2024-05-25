import React from "react";

interface SectionProps {
  titles: React.ReactNode[];
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
  id?: string;
  role?: string;
  ariaLabel?: string;
};

export default function Section({ titles, subtitle, className, children, ...rest }: SectionProps) {
  return (
    <section {...rest} className={className}>
      <div className={`${className}__section`}>
        {titles.map((title: React.ReactNode, index: number) => (
          <h1 key={index} className={`${className}__section__title`}>{title}</h1>
        ))}
        {subtitle && <h2 className={`${className}__section__subtitle`}>{subtitle}</h2>}
      </div>
      {children}
    </section>
  );
};
