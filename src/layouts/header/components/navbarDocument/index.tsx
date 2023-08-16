import Link from "next/link";
import { NavbarDocumentInterface } from "@/interface";

export function NavbarDocument({
  templates,
  examples,
  sidebar,
}: NavbarDocumentInterface) {
  const {
    title: templatesTitle,
    link: templatesLink,
    categories: templateCategories,
  } = templates;
  const { title: examplesTitle, categories: examplesCategories } = examples;
  const { title: sidebarTitle, icon, link: sidebarLink } = sidebar;

  return (
    <div className="navbar__document navbar__dropdown-content">
      <div className="navbar__document-container navbar__dropdown-container">
        <div className="navbar__document-main">
          <div className="navbar__document-examples"></div>
        </div>
        <div className="navbar__document-sidebar"></div>
      </div>
    </div>
  );
}
