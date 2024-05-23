import { LinkProps } from "next/link";
import NavBar from "./components/navBar";

interface InternalLinkProps {
  href: string;
  label: string;
  className?: string;

};

const link: InternalLinkProps = {
  href: "/",
  label: "Página Inicial",
} as InternalLinkProps;

const navItems: LinkProps[] = [
  link,
  {
    href: "/sobre",
    label: "Sobre",
  },
  {
    href: "/contato",
    label: "Contato",
  },
];

export default function Home() {
  return (
    <div>
      <NavBar navItems={navItems} navbarTitulo="Seu titulo" />
      <h1>Home</h1>
    </div>
  );
}
