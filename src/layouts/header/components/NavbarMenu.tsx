import Link from "next/link";
import { NavbarMenuInterface } from "@/interface";
import { ArrowIcon } from "@/assets";

export function NavbarMenu({ navbarLinks }: NavbarMenuInterface) {
  const changeActiveContent = (dataTrigger: string | undefined) => {
    dataTrigger ? console.log(dataTrigger) : null;
  };

  return (
    <div className="navbar__menu">
      {navbarLinks.map(({ id, title, link, dataTrigger }) => (
        <Link
          className="navbar__link"
          onMouseOver={() => changeActiveContent(dataTrigger)}
          href={link}
          key={id}
        >
          {title}
          {dataTrigger ? <ArrowIcon /> : null}
        </Link>
      ))}
      <div className="navbar__separator" />
      <div className="navbar__auth">
        <Link className="navbar__auth-link login" href="/login">
          Log In
        </Link>
        <Link
          className="navbar__auth-button button primary signup"
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
