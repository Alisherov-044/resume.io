import { ComponentProps } from "react";

export function ArrowRightIcon({ className }: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M9.4 7.3l1.4-1.5 5.9 5.5c.4.4.4 1 0 1.4l-6 5.5-1.3-1.5 5.1-4.7-5-4.7z"></path>
    </svg>
  );
}
