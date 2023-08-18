import Link from "next/link";
import { ArrowRightIcon } from "@/assets";
import { NavbarDocumentInterface } from "@/interface";

export function NavbarDocumentExamples({
  examples,
}: Pick<NavbarDocumentInterface, "examples">) {
  const { title, link, categories } = examples;

  return (
    <div className="navbar__document-examples">
      <div className="navbar__dropdown-header">
        <Link href={link} className="navbar__dropdown-header--title">
          {title}
        </Link>
      </div>
      <div className="navbar__document-examples-wrapper">
        {categories.map(({ id, label, link }) => (
          <Link className="navbar__document-examples-item" href={link} key={id}>
            {label}
          </Link>
        ))}
        <Link className="navbar__document-action" href={link}>
          All Examples
          <ArrowRightIcon className="navbar__template-arrow" />
        </Link>
      </div>
    </div>
  );
}
