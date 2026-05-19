"use client";

import { useEffect, useState } from "react";

export default function SystemLogs() {

  const logs = [
    "[01:04:22] Scanning planetary networks...",
    "[01:04:24] Detecting synthetic cognition...",
    "[01:04:29] AI acceleration spike detected...",
    "[01:04:35] Monitoring AGI emergence...",
    "[01:04:42] Quantum node synchronization active...",
    "[01:04:51] Civilization trajectory updated..."
  ];

  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setVisibleLogs((prev) => [
        ...prev,
        logs[index]
      ]);

      index++;

      if (index >= logs.length) {
        clearInterval(interval);
      }

    }, 1200);

    return () => clearInterval(interval);

  }, []);

  return (
    <section className="
      mt-10
      bg-black/50
      border border-green-500/30
      rounded-2xl
      p-6
      text-green-400
      font-mono
      backdrop-blur-xl
      shadow-[0_0_40px_rgba(0,255,140,0.12)]
    ">

      <h2 className="text-xl mb-6 tracking-widest">
        SYSTEM LOGS
      </h2>

      <div className="space-y-3">

        {visibleLogs.map((log, index) => (
          <p
            key={index}
            className="animate-pulse"
          >
            {log}
          </p>
        ))}

      </div>

    </section>
  );
}