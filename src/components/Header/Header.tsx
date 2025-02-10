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

  useVerticalScrollEvent((evt: any) => {
    if (!isClient || !stickyRef.current) return;

    if (evt.currentTarget.scrollY >= 172) {
      stickyRef.current.classList.add("navbar_fixed");
    } else if (evt.currentTarget.scrollY <= 42) {
      stickyRef.current.classList.remove("navbar_fixed");
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
