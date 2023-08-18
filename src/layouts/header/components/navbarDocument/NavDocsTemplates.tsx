import Link from "next/link";
import { NavbarDocumentInterface } from "@/interface";
import { NavbarDocumentCategoryCard } from "@/components";

export function NavbarDocumentTemplates({
  templates,
}: Pick<NavbarDocumentInterface, "templates">) {
  const { title, link, categories } = templates;

  return (
    <div className="navbar__document-templates">
      <div className="navbar__dropdown-header">
        <Link href={link} className="navbar__dropdown-header--title">
          {title}
        </Link>
        <Link href={link} className="navbar__dropdown-header--link">
          View all
        </Link>
      </div>
      <div className="navbar__template-categories">
        {categories.map((category) => (
          <NavbarDocumentCategoryCard {...category} key={category.id} />
        ))}
      </div>
    </div>
  );
}
