import { useEffect, useState } from "react";
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolableRange = document.body.scrollHeight - window.innerHeight;
      const scrollPercent: number = Number(scrollTop / scrolableRange) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollProgress;
};
