"use client"; 

import React, { useEffect, useState } from "react";

const ScrollFadeHeader = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newOpacity = Math.max(1 - scrollTop / 300, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <h2
      className="text-7xl font-bold bg-[radial-gradient(61.17%_178.53%_at_38.83%_-13.54%,#3B3B3B_0%,#888787_12.61%,#FFFFFF_50%,#888787_80%,#3B3B3B_100%)] bg-clip-text text-transparent transition-opacity duration-200"
      style={{ opacity }}
    >
      Your All-in-One <br /> Crypto Companion
    </h2>
  );
};

export default ScrollFadeHeader;
