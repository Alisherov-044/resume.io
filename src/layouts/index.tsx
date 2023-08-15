import { Header } from "./header";
import { Footer } from "./footer";
import { LayoutsInterface } from "@/interface";

export function Layout({ children }: LayoutsInterface) {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
