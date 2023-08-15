import Link from "next/link";
import { LogoIcon } from "@/assets";

export function Logo() {
  return (
    <Link href="/" className="logo">
      <LogoIcon />
    </Link>
  );
}
