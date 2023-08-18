/* Layouts */
export interface NavbarLinkScheme {
  id: number;
  title: string;
  link: string;
  dataTrigger?: string;
}

export interface NavbarDocumentTemplateCategoriesScheme {
  id: number;
  icon: string;
  label: string;
  description: string;
  link: string;
  dataTrigger?: string;
}

export interface NavbarDocumentExamplesLinkScheme {
  id: number;
  label: string;
  link: string;
  dataTrigger?: string;
}

export interface NavbarDocumentTemplateScheme {
  title: string;
  link: string;
  categories: NavbarDocumentTemplateCategoriesScheme[];
}

export interface NavbarDocumentExamplesScheme {
  title: string;
  link: string;
  categories: NavbarDocumentExamplesLinkScheme[];
}

export interface NavbarDocumentSidebarScheme {
  icon: string;
  title: string;
  description: string;
  link: string;
  dataTrigger?: string;
}
