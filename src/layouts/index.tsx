import { Header } from "./header";
import { Footer } from "./footer";
import { Roboto } from "next/font/google";
import { LayoutsInterface } from "@/interface";
import { useTypedSelector } from "@/hooks";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export function Layout({ children }: LayoutsInterface) {
  const { navbarDropdownIsVisible } = useTypedSelector((state) => state.layout);

  return (
    <div id="root" className={roboto.className}>
      <Header />
      <main
        className="main"
        style={{ zIndex: navbarDropdownIsVisible ? "unset" : 10 }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
