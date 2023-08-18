import { DropDownInterface, Events } from "@/interface";

export function DropDown({ children, isHidden, className }: DropDownInterface) {
  return (
    <div className={`dropdown ${className} ${isHidden ? "hidden" : "visible"}`}>
      {children}
    </div>
  );
}
