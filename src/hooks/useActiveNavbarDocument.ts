import { NavbarDocumentsHookInterface } from "@/interface";
import { useTypedSelector } from ".";

export function useActiveNavbarDocument() {
  const { activeNavbarDocument } = useTypedSelector((state) => state.layout);

  const documents: NavbarDocumentsHookInterface = {
    resume: {
      templates: {
        title: "Resume Templates",
        link: "/resume-templates",
      },
      examples: {
        title: "Resume Examples",
        link: "/resume-examples",
      },
    },
    "cover-letter": {
      templates: {
        title: "Cover Letter Templates",
        link: "/cover-letter-templates",
      },
      examples: {
        title: "Cover Letter Templates",
        link: "/cover-letter-examples",
      },
    },
  };

  return { documents, activeDocument: documents[activeNavbarDocument] || {} };
}
