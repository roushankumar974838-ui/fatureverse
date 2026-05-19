export default function CivilizationTimeline() {
  const events = [
    {
      year: "2028",
      title: "Agentic AI Systems",
      desc: "Autonomous AI agents begin assisting civilization."
    },
    {
      year: "2035",
      title: "Human-AI Collaboration",
      desc: "AI becomes part of daily scientific and economic systems."
    },
    {
      year: "2045",
      title: "Synthetic Scientific Discovery",
      desc: "AI discovers new materials, medicines, and physics models."
    },
    {
      year: "2060",
      title: "Interplanetary Infrastructure",
      desc: "Moon and Mars industrial systems emerge."
    },
    {
      year: "2100",
      title: "Post-Biological Civilization",
      desc: "Intelligence expands beyond biological limits."
    }
  ];

  return (
    <section className="
    mt-12
    border border-green-500/30
    bg-black/50
    rounded-2xl
    p-8
    backdrop-blur-xl
    shadow-[0_0_40px_rgba(0,255,140,0.15)]
    text-green-400
    font-mono
    ">

      <h2 className="text-2xl mb-8 tracking-widest">
        CIVILIZATION TIMELINE
      </h2>

      <div className="space-y-8">

        {events.map((event, index) => (
          <div
            key={index}
            className="border-l-2 border-green-500 pl-6 relative"
          >

            <div className="
            absolute
            -left-2
            top-2
            w-4
            h-4
            rounded-full
            bg-green-400
            shadow-[0_0_15px_rgba(0,255,140,0.8)]
            " />

            <h3 className="text-xl">
              {event.year} → {event.title}
            </h3>

            <p className="text-green-300/80 mt-2">
              {event.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}