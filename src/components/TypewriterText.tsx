
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
    setDisplayed(""); // Reset if text changes
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
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
