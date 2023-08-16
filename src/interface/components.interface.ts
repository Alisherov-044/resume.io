import { ReactNode } from "react";

/* UI */
export interface ButtonInterface {
  variant?: "primary" | "outline";
  children?: ReactNode;
  text?: string;
  className?: string;
}

export interface DropDownInterface {
  children: ReactNode;
  isHidden: boolean;
  className?: string;
}
