import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, Layers, Lock, Plus, Save, Trash2, X } from 'lucide-react';

export default function AdminModal({ content, onSave, onCancel, isSaving }) {
  const [draft, setDraft] = useState(() => structuredClone(content));
  const [tab, setTab] = useState('hero');

  const updateHero = (field, value) => setDraft((current) => ({ ...current, hero: { ...current.hero, [field]: value } }));
  const updateVideo = (index, field, value) => setDraft((current) => {
    const videos = [...current.videos];
    videos[index] = { ...videos[index], [field]: value };
    return { ...current, videos };
  });
  const moveVideo = (index, direction) => setDraft((current) => {
    const videos = [...current.videos];
    const target = index + direction;
    if (target < 0 || target >= videos.length) return current;
    [videos[index], videos[target]] = [videos[target], videos[index]];
    return { ...current, videos };
  });
  const addVideo = () => setDraft((current) => ({ ...current, videos: [{ id: Date.now(), title: 'New Project', category: 'Category', src: '', description: 'Description' }, ...current.videos] }));
  const removeVideo = (index) => setDraft((current) => ({ ...current, videos: current.videos.filter((_, i) => i !== index) }));

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6 pb-24 font-sans animate-in fade-in">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 sticky top-0 bg-neutral-900/95 backdrop-blur z-50 py-4 border-b border-white/10 gap-4">
          <h1 className="text-2xl font-bold flex items-center gap-2"><Layers className="text-indigo-500" /> Admin Dashboard</h1>
          <div className="flex gap-3">
            <button onClick={onCancel} disabled={isSaving} className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/10 transition text-sm">Cancel</button>
            <button onClick={() => onSave(draft)} disabled={isSaving} className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 font-bold flex items-center gap-2 transition text-sm disabled:opacity-50">
              <Save size={18} /> {isSaving ? 'Saving...' : 'Save to Backend'}
            </button>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <button onClick={() => setTab('hero')} className={`px-4 py-2 rounded-full font-medium transition ${tab === 'hero' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}>Homepage & Info</button>
          <button onClick={() => setTab('videos')} className={`px-4 py-2 rounded-full font-medium transition ${tab === 'videos' ? 'bg-white text-black' : 'bg-white/5 text-neutral-400 hover:bg-white/10'}`}>Video Portfolio</button>
        </div>

        {tab === 'hero' && (
          <div className="space-y-6">
            <div className="bg-black/40 p-6 rounded-xl border border-white/10 space-y-4">
              <h2 className="text-indigo-400 uppercase tracking-widest text-xs font-bold">Hero Config</h2>
              <Field label="Headline Part 1 (White)" value={draft.hero.headlinePart1} onChange={(v) => updateHero('headlinePart1', v)} />
              <Field label="Headline Part 2 (Gradient)" value={draft.hero.headlinePart2} onChange={(v) => updateHero('headlinePart2', v)} />
              <TextArea label="Description" value={draft.hero.description} onChange={(v) => updateHero('description', v)} />
              <Field label="Hero Image URL (Link)" value={draft.hero.imageSrc} onChange={(v) => updateHero('imageSrc', v)} />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Name" value={draft.hero.name} onChange={(v) => updateHero('name', v)} />
                <Field label="Experience" value={draft.hero.statsExp} onChange={(v) => updateHero('statsExp', v)} />
                <Field label="Projects" value={draft.hero.statsProj} onChange={(v) => updateHero('statsProj', v)} />
              </div>
            </div>
          </div>
        )}

        {tab === 'videos' && (
          <div className="space-y-6">
            <button onClick={addVideo} className="w-full py-4 rounded-xl border-2 border-dashed border-white/20 text-white/50 hover:border-indigo-500 hover:text-indigo-500 transition flex items-center justify-center gap-2 font-bold"><Plus size={20} /> Add Video</button>
            {draft.videos.map((video, index) => (
              <div key={video.id} className="bg-black/40 p-6 rounded-xl border border-white/10 relative group transition-all duration-300">
                <div className="absolute top-4 right-4 flex gap-2">
                  <IconButton onClick={() => moveVideo(index, -1)} disabled={index === 0} title="Move Up"><ArrowUp size={16} /></IconButton>
                  <IconButton onClick={() => moveVideo(index, 1)} disabled={index === draft.videos.length - 1} title="Move Down"><ArrowDown size={16} /></IconButton>
                  <button onClick={() => removeVideo(index)} className="p-2 bg-red-500/10 text-red-500 rounded hover:bg-red-500 hover:text-white transition ml-2" title="Delete Video"><Trash2 size={16} /></button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 mt-8 md:mt-0">
                  <div className="md:col-span-2"><Field label="Title" value={video.title} onChange={(v) => updateVideo(index, 'title', v)} /></div>
                  <Field label="Category" value={video.category} onChange={(v) => updateVideo(index, 'category', v)} />
                  <Field label="Video Link (MP4/URL)" value={video.src} onChange={(v) => updateVideo(index, 'src', v)} />
                  <div className="md:col-span-2"><TextArea label="Description" value={video.description} onChange={(v) => updateVideo(index, 'description', v)} /></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value = '', onChange }) {
  return <label className="block text-xs text-neutral-500 mb-1">{label}<input type="text" value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 w-full bg-neutral-800 border border-white/10 rounded p-3 text-white focus:border-indigo-500 outline-none" /></label>;
}
function TextArea({ label, value = '', onChange }) {
  return <label className="block text-xs text-neutral-500 mb-1">{label}<textarea value={value} onChange={(e) => onChange(e.target.value)} rows={3} className="mt-1 w-full bg-neutral-800 border border-white/10 rounded p-3 text-white focus:border-indigo-500 outline-none" /></label>;
}
function IconButton({ children, ...props }) { return <button {...props} className="p-2 bg-white/10 text-white rounded hover:bg-indigo-600 disabled:opacity-30 disabled:hover:bg-white/10 transition">{children}</button>; }
