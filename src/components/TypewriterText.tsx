
import React, { useState, useEffect } from "react";

type TypewriterTextProps = {
  text: string;
  className?: string;
  speed?: number;
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = "",
  speed = 60,
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      // Only add characters if within bounds
      if (i < text.length) {
        setDisplayed((prev) => prev + text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span className="border-r-2 border-zinc-800 animate-pulse ml-0.5" />
    </span>
  );
};
