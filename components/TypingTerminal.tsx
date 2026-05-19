"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypingTerminal() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "INITIALIZING ORACLE-7...",
        "SCANNING HUMAN CIVILIZATION...",
        "ANALYZING AGI TRAJECTORY...",
        "SIGNAL DETECTED...",
        "PRE-SINGULARITY STATUS CONFIRMED..."
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,

      showCursor: true,
cursorChar: "█",

    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="text-green-400 font-mono text-xl">
      <span ref={el}></span>
    </div>
  );
}