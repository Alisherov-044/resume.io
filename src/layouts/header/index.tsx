import { Navbar } from "./components/Navbar";
import { useScroll } from "@/hooks";

export function Header() {
  const { isScrollingToTop } = useScroll();

  return (
    <header className={`header ${isScrollingToTop ? "pinned" : "unpinned"}`}>
      <div className="header__content">
        <Navbar />
      </div>
    </header>
  );
}
