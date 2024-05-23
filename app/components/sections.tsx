import React from "react";
import ComponenteLink from "../core/link";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  subtitle: string;
  className?: string;
}

export default function Section({ title, subtitle, children, className }: SectionProps) {
  return (
    <section className={className}>
      
    </section>
  );
}