import { ReactNode } from "react";
import {
  NavbarDocumentExamplesScheme,
  NavbarDocumentSidebarScheme,
  NavbarDocumentTemplateCategoriesScheme,
  NavbarDocumentTemplateScheme,
  NavbarLinkScheme,
} from "./scheme.interface";

/* Main */
export interface LayoutsInterface {
  children: ReactNode;
}

/* Header */
export interface NavbarMenuInterface {
  navbarLinks: NavbarLinkScheme[];
}

export interface NavbarDocumentInterface {
  dataTrigger?: string;
  templates: NavbarDocumentTemplateScheme;
  examples: NavbarDocumentExamplesScheme;
  sidebar: NavbarDocumentSidebarScheme;
  className?: string;
}

export interface NavbarDocumentCategoryCardInterface
  extends NavbarDocumentTemplateCategoriesScheme {
  className?: string;
}

/* Footer */
