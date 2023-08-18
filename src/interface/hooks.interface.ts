export interface ScrollPositionInterface {
  y: number;
  x: number;
}

export interface LinkInterface {
  title: string;
  link: string;
}

export interface NavbarDocumentsHookInterface {
  [key: string]: {
    templates: LinkInterface;
    examples: LinkInterface;
  };
}
