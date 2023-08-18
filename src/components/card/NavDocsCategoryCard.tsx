import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@/assets";
import { NavbarDocumentCategoryCardInterface } from "@/interface";

export function NavbarDocumentCategoryCard({
  icon,
  label,
  description,
  link,
  className,
}: NavbarDocumentCategoryCardInterface) {
  return (
    <Link
      href={link}
      className={`navbar__template-category ${className ? className : ""}`}
    >
      <ArrowRightIcon className="navbar__template-category-arrow" />
      <h2 className="navbar__template-category-title">
        <Image
          className="navbar__template-category-icon"
          src={icon}
          width={24}
          height={24}
          alt="category icon"
        />
        {label}
      </h2>
      <p className="navbar__template-category-description">{description}</p>
    </Link>
  );
}
