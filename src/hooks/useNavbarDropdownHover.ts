import { useEffect } from "react";
import { hideNavbarDropdown } from "@/redux/slices/layoutSlice";
import { useDomChildren, useTypedDispatch, useTypedSelector } from "@/hooks";

export function useNavbarDropdownHover() {
  const { navbarDropdownIsVisible } = useTypedSelector((state) => state.layout);
  const { getAllChildren } = useDomChildren();

  const dispatch = useTypedDispatch();

  const controlNavbarDropdown = (e: any) => {
    const dropdown = document.querySelector(".navbar__dropdown");
    const links = document.querySelectorAll(".navbar__link-dropdown");
    let contents: any[] = [];

    getAllChildren([links], contents);
    getAllChildren([[dropdown]], contents);

    if (!contents.includes(e.target)) {
      dispatch(hideNavbarDropdown());
    }
  };

  const controlHoverEvent = () => {
    useEffect(() => {
      if (navbarDropdownIsVisible) {
        window.addEventListener("mouseover", controlNavbarDropdown);
      }

      return () =>
        window.removeEventListener("mouseover", controlNavbarDropdown);
    });
  };

  return { controlHoverEvent };
}
