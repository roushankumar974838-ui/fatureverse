"use client";

import { useState } from "react";

export default function CommandConsole() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleCommand = () => {
    const cmd = input.toLowerCase();

    if (cmd === "activate oracle") {
      setOutput("ORACLE-7 ACTIVATED");
      speechSynthesis.speak(
  new SpeechSynthesisUtterance("Oracle 7 activated")
);
    } 
    
    else if (cmd === "scan network") {
      setOutput("SCANNING GLOBAL NETWORKS...");
      speechSynthesis.speak(
  new SpeechSynthesisUtterance("Scanning global networks")
);  
    }

    else if (cmd === "launch protocol") {
  setOutput("PROTOCOL SUCCESSFULLY LAUNCHED");

  speechSynthesis.speak(
    new SpeechSynthesisUtterance("Protocol successfully launched")
  );
}

    else {
      setOutput("UNKNOWN COMMAND");
    }

    setInput("");
  };

  return (
    <div className="mt-10 border border-green-500/30 bg-black/40 p-6 rounded-2xl text-green-400 font-mono shadow-[0_0_30px_rgba(0,255,140,0.2)]">

      <h2 className="text-xl mb-4">
        [ COMMAND CONSOLE ]
      </h2>

      <div className="flex gap-3">
        
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type command..."
          className="flex-1 bg-black border border-green-500/40 px-4 py-2 rounded-lg outline-none"
        />

        <button
          onClick={handleCommand}
          className="px-4 py-2 bg-green-500/20 border border-green-500 rounded-lg hover:bg-green-500/30"
        >
          EXECUTE
        </button>

      </div>

      <div className="mt-4 text-green-300">
        {output}
      </div>

    </div>
  );
}