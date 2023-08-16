import { Header } from "./header";
import { Footer } from "./footer";
import { Roboto } from "next/font/google";
import { LayoutsInterface } from "@/interface";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export function Layout({ children }: LayoutsInterface) {
  return (
    <div id="root" className={roboto.className}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
