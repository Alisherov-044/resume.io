import { useEffect, useState } from "react";
import { ScrollPositionInterface } from "@/interface";

export function useScroll() {
  const [isScrollingToTop, setIsScrollingToTop] = useState<boolean>(true);
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionInterface>(
    {
      y: 0,
      x: 0,
    }
  );

  const listenScrollPosition = () => {
    const yPosition = window.scrollY;
    const xPosition = window.scrollX;

    if (yPosition !== scrollPosition.y) {
      setScrollPosition({
        ...scrollPosition,
        y: yPosition,
      });
    }

    if (xPosition !== scrollPosition.x) {
      setScrollPosition({
        ...scrollPosition,
        x: xPosition,
      });
    }
  };

  const detectScrollYPosition = () => {
    setIsScrollingToTop(!!(window.scrollY < scrollPosition.y));
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollPosition);

    return () => {
      window.removeEventListener("scroll", listenScrollPosition);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", detectScrollYPosition);

    return () => {
      window.removeEventListener("scroll", detectScrollYPosition);
    };
  }, [scrollPosition.y]);

  return { scrollPosition, isScrollingToTop };
}
