import { NavbarDocumentTemplates } from "./NavDocsTemplates";
import { NavbarDocumentExamples } from "./NavDocsExamples";
import { NavbarDocumentInterface } from "@/interface";
import { NavbarDropdownSidebar } from "./NavDropdownSidebar";

export function NavbarDocument({
  templates,
  examples,
  sidebar,
  className,
}: NavbarDocumentInterface) {
  return (
    <div className={`navbar__document navbar__dropdown-content ${className}`}>
      <div className="navbar__document-container navbar__dropdown-container">
        <div className="navbar__document-main">
          <NavbarDocumentTemplates templates={templates} />
          <NavbarDocumentExamples examples={examples} />
        </div>
        <NavbarDropdownSidebar sidebar={sidebar} />
      </div>
    </div>
  );
}
