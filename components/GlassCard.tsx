export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(120,180,255,0.15)] ${className}`}
    >
      {children}
    </div>
  );
}