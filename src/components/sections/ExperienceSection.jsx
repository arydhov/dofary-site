import { MapPin } from 'lucide-react';

function ExperienceItem({ company, date, role, location, description }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-neutral-900 group-hover:bg-indigo-600 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-white/5 z-10">
        <span className="w-3 h-3 bg-indigo-500 rounded-full group-hover:bg-white" />
      </div>
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-neutral-900 border border-white/5 hover:border-indigo-500/30 transition-all shadow-xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
          <h3 className="font-bold text-white text-lg">{company}</h3>
          <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded mt-1 md:mt-0 w-fit">{date}</span>
        </div>
        <div className="text-sm text-white/90 mb-1 font-medium">{role}</div>
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-4"><MapPin size={12} />{location}</div>
        <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export default function ExperienceSection({ items }) {
  return (
    <section id="experience" className="py-24 bg-neutral-900/30 border-y border-white/5">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Background</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {items.map(([company, date, role, location, description]) => (
            <ExperienceItem key={`${company}-${date}`} company={company} date={date} role={role} location={location} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
}
