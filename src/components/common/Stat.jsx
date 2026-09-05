export default function Stat({ value, label }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg flex flex-col min-w-[100px] group hover:border-indigo-500/50 transition-colors">
      <span className="text-xl font-bold text-white mb-0.5 group-hover:text-indigo-400 transition-colors">{value}</span>
      <span className="text-[9px] text-neutral-400 uppercase tracking-wider font-medium">{label}</span>
    </div>
  );
}
