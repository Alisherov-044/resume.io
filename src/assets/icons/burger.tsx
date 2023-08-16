import { BurgerIconInterface, Events } from "@/interface";

export function BurgerIcon({
  className,
  isOpen,
  onClick,
}: BurgerIconInterface & Pick<Events, "onClick">) {
  return (
    <div
      className={`burger__icon ${className} ${isOpen ? "open" : "close"}`}
      onClick={onClick}
    >
      <div className="burger__icon-line burger__icon-line--1" />
      <div className="burger__icon-line burger__icon-line--2" />
      <div className="burger__icon-line burger__icon-line--3" />
    </div>
  );
}
