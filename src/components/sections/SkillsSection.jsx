import { Cpu, Layers, Sparkles, Video } from 'lucide-react';

const icons = [Layers, Video, Cpu, Sparkles];

function Skill({ Icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400"><Icon size={24} /></div>
      <div><h3 className="font-bold text-white">{title}</h3><p className="text-sm text-neutral-500">{description}</p></div>
    </div>
  );
}

export default function SkillsSection({ skills, tools }) {
  return (
    <section id="skills" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tools & Expertise</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">My core strength lies in translating narrative and abstract concepts into clear, engaging motion visuals. I prioritize clarity, pacing, and visual intention over excessive effects.</p>
            <div className="space-y-6">
              {skills.map(([title, description], index) => <Skill key={title} Icon={icons[index] || Sparkles} title={title} description={description} />)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tools.map(([short, name]) => (
              <div key={name} className="p-6 bg-neutral-900 rounded-xl border border-white/5 hover:border-indigo-500/50 transition-colors">
                <div className="text-indigo-500 font-bold text-lg mb-2">{short}</div>
                <div className="text-white font-medium">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
