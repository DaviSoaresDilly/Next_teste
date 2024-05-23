/* eslint-disable react/no-children-prop */
import React from "react";
import LinkComponent from "../core/link";

interface SectionProps {
  title: React.ReactNode;
  subtitle: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Section({ title, subtitle, className }: SectionProps) {
  return (
    <section className={className}>
      <div className={className+"__section"}>
        <h1 className={className+"__section__title"}>{title}</h1>
        <h2 className={className+"__section__subtitle"}>{subtitle}</h2>
        
      </div>
    </section>
  );
}