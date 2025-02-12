import React, { useRef, useEffect, useState } from "react";
import TopNav from "../TopNav/TopNav";
import MainMenu from "../MainMenu/MainMenu";
import SearchBar from "../SearchBar/SearchBar";
import useVerticalScrollEvent from "@/hooks/useVerticalScrollEvent";

const Header = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fix type for evt parameter and handle null checks for stickyRef
  useVerticalScrollEvent((evt: Event) => {
    if (!isClient || !stickyRef.current) return;

    const scrollTarget = evt.currentTarget as Window | Element;
    if (scrollTarget && 'scrollY' in scrollTarget) {
      const scrollY = scrollTarget.scrollY;
      if (scrollY >= 172) {
        stickyRef.current.classList.add("navbar_fixed");
      } else if (scrollY <= 42) {
        stickyRef.current.classList.remove("navbar_fixed");
      }
    }
  });

  return (
    <header className="header_area" ref={stickyRef}>
      <TopNav />
      <MainMenu />
      <SearchBar />
    </header>
  );
};

export default Header;
