export default function SectionHeading({ title, eyebrow }) {
  return (
    <div>
      {eyebrow && <p className="text-indigo-400 text-xs uppercase tracking-widest font-bold mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      <div className="h-1 w-20 bg-indigo-600" />
    </div>
  );
}
