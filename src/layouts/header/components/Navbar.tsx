import { Logo } from "@/components";
import { NavbarMenu } from "./NavbarMenu";
import { navbarLinks } from "@/data";
import { BurgerIcon } from "@/assets";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Logo />
      <NavbarMenu navbarLinks={navbarLinks} />
      <BurgerIcon className="navbar__burger" isOpen={isOpen} onClick={toggle} />
    </nav>
  );
}
