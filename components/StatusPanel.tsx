export default function StatusPanel() {

  const stats = [
    {
      label: "AGI Probability",
      value: "43%"
    },
    {
      label: "Quantum Compute",
      value: "ACTIVE"
    },
    {
      label: "Signal Strength",
      value: "DETECTED"
    },
    {
      label: "Civilization Status",
      value: "TRANSITIONING"
    }
  ];

  return (
    <section className="
    mt-10
    grid
    md:grid-cols-2
    gap-6
    ">

      {stats.map((item, index) => (

        <div
          key={index}
          className="
          bg-black/50
          border border-green-500/30
          rounded-2xl
          p-6
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(0,255,140,0.12)]
          text-green-400
          font-mono
          "
        >

          <p className="text-green-300/70 text-sm">
            {item.label}
          </p>

          <h2 className="text-3xl mt-2 tracking-widest">
            {item.value}
          </h2>

        </div>

      ))}

    </section>
  );
}