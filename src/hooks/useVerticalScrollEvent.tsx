import { useEffect } from "react";

const useVerticalScrollEvent = (callback: (evt: Event) => void) => {
  useEffect(() => {
    // Adding event listener for scroll event
    const handleScroll = (evt: Event) => {
      callback(evt);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [callback]);
};

export default useVerticalScrollEvent;
