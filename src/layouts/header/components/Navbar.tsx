import { Logo } from "@/components";
import { NavbarMenu } from "./NavbarMenu";
import { navbarLinks } from "@/data";
import { BurgerIcon } from "@/assets";
import { useState } from "react";
import { useTypedSelector } from "@/hooks";

export function Navbar() {
  const { navbarDropdownIsVisible } = useTypedSelector((state) => state.layout);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${navbarDropdownIsVisible ? "dropdown-open" : ""}`}>
      <Logo />
      <NavbarMenu navbarLinks={navbarLinks} />
      <BurgerIcon className="navbar__burger" isOpen={isOpen} onClick={toggle} />
    </nav>
  );
}
