import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/assets";
import { NavbarDocumentInterface } from "@/interface";

export function NavbarDropdownSidebar({
  sidebar,
}: Pick<NavbarDocumentInterface, "sidebar">) {
  const { title, icon, link, description, dataTrigger } = sidebar;

  return (
    <div className="navbar__document-sidebar">
      <Link className="navbar__document-sidebar-link" href={link}>
        <Image
          className="navbar__document-sidebar-icon"
          src={icon}
          width={152}
          height={180}
          alt="navbar document icon"
        />
        <div className="navbar__document-sidebar-content">
          <h2 className="navbar__document-sidebar-title">{title}</h2>
          <p className="navbar__document-sidebar-description">{description}</p>
          <span className="navbar__document-action">
            {dataTrigger !== "resume-writer"
              ? "Get Started Now"
              : "Create my resume"}
            <ArrowRightIcon className="navbar__template-arrow" />
          </span>
        </div>
      </Link>
    </div>
  );
}
