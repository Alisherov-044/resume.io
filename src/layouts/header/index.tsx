import { Navbar } from "./components/Navbar";
import { useNavbarDropdownHover, useScroll } from "@/hooks";
import { NavbarDropDown } from "./components/NavbarDropDown";

export function Header() {
  const { isScrollingToTop } = useScroll();
  const { controlHoverEvent } = useNavbarDropdownHover();

  controlHoverEvent();

  return (
    <header className={`header ${isScrollingToTop ? "pinned" : "unpinned"}`}>
      <div className="header__content">
        <Navbar />
        <NavbarDropDown />
      </div>
    </header>
  );
}
