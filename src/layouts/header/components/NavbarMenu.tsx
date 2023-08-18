import Link from "next/link";
import { NavbarMenuInterface } from "@/interface";
import { ArrowDownIcon } from "@/assets";
import { useTypedDispatch, useTypedSelector } from "@/hooks";
import {
  setActiveNavbarDocument,
  showNavbarDropdown,
} from "@/redux/slices/layoutSlice";
import { debounce } from "lodash";

export function NavbarMenu({ navbarLinks }: NavbarMenuInterface) {
  const { activeNavbarDocument, navbarDropdownIsVisible } = useTypedSelector(
    (state) => state.layout
  );
  const dispatch = useTypedDispatch();

  const changeActiveContent = debounce((dataTrigger: string | undefined) => {
    dataTrigger ? dispatch(setActiveNavbarDocument(dataTrigger)) : null;
    dispatch(showNavbarDropdown());
  }, 50);

  return (
    <div className="navbar__menu">
      {navbarLinks.map(({ id, title, link, dataTrigger }) => (
        <Link
          className={`navbar__link ${
            dataTrigger ? "navbar__link-dropdown" : ""
          } ${
            dataTrigger === activeNavbarDocument && navbarDropdownIsVisible
              ? "selected"
              : ""
          }`}
          onMouseOver={() =>
            dataTrigger ? changeActiveContent(dataTrigger) : null
          }
          href={link}
          key={id}
        >
          {title}
          {dataTrigger ? <ArrowDownIcon /> : null}
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
