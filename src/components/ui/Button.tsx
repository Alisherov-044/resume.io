import { ButtonInterface, Events } from "@/interface";

export function Button({
  variant = "primary",
  children,
  text,
  className,
  onClick,
}: ButtonInterface & Pick<Events, "onClick">) {
  return (
    <button className={`${className} ${variant}`} onClick={onClick}>
      {children || text}
    </button>
  );
}
