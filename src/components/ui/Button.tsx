import { ButtonInterface, Events } from "@/interface";

export function Button({
  children,
  text,
  className,
  onClick,
}: ButtonInterface & Pick<Events, "onClick">) {
  return (
    <button className={className} onClick={onClick}>
      {children || text}
    </button>
  );
}
