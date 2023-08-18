import { DropDown } from "@/components";
import { NavbarDocument } from "./navbarDocument";
import {
  navbarDocumentContents,
  navbarTemplateCategories,
  navbarTemplateExamples,
} from "@/data";
import { NavbarDocumentSidebarScheme } from "@/interface/scheme.interface";
import { useActiveNavbarDocument, useTypedSelector } from "@/hooks";

export function NavbarDropDown() {
  const { navbarDropdownIsVisible, activeNavbarDocument } = useTypedSelector(
    (state) => state.layout
  );
  const { documents } = useActiveNavbarDocument();

  return (
    <DropDown className="navbar__dropdown" isHidden={!navbarDropdownIsVisible}>
      <NavbarDocument
        className={
          activeNavbarDocument === "resume"
            ? "active"
            : "" && navbarDropdownIsVisible
            ? "transition"
            : ""
        }
        templates={{
          ...documents["resume"].templates,
          categories: navbarTemplateCategories.filter(
            (category) => category.dataTrigger === "resume"
          ),
        }}
        examples={{
          ...documents["resume"].templates,
          categories: navbarTemplateExamples.filter(
            (example) => example.dataTrigger === "resume"
          ),
        }}
        sidebar={
          navbarDocumentContents.find(
            ({ dataTrigger }) => dataTrigger === "resume"
          ) as NavbarDocumentSidebarScheme
        }
      />
      <NavbarDocument
        className={activeNavbarDocument === "cover-letter" ? "active" : ""}
        templates={{
          ...documents["cover-letter"].templates,
          categories: navbarTemplateCategories.filter(
            (category) => category.dataTrigger === "cover-letter"
          ),
        }}
        examples={{
          ...documents["cover-letter"].templates,
          categories: navbarTemplateExamples.filter(
            (example) => example.dataTrigger === "cover-letter"
          ),
        }}
        sidebar={
          navbarDocumentContents.find(
            ({ dataTrigger }) => dataTrigger === "cover-letter"
          ) as NavbarDocumentSidebarScheme
        }
      />
    </DropDown>
  );
}
