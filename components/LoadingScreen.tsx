"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {

  const [visible, setVisible] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(false);
    }, 4000);

    return () => clearTimeout(timer);

  }, []);

  if (!visible) return null;

  return (

    <div className="
    fixed
    inset-0
    z-9999
    bg-black
    flex
    items-center
    justify-center
    overflow-hidden
    ">

      <div className="
      text-green-400
      font-mono
      text-center
      space-y-4
      animate-pulse tracking-widest
      ">

        <h1 className="text-3xl tracking-[0.3em]">
          ORACLE-7
        </h1>

        <p>
          INITIALIZING ORACLE-7...
        </p>

        <p>
          CONNECTING TO CIVILIZATION DATABASE...
        </p>

        <p>
          ACCESS GRANTED.
        </p>

        <p className="text-green-500/70 text-sm">
  ESTABLISHING SECURE CONNECTION...
</p>

      </div>

    </div>
  );
}