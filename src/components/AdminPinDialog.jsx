import { ArrowRight, Lock, X } from 'lucide-react';

export default function AdminPinDialog({ pin, setPin, error, onSubmit, onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-neutral-900 border border-white/10 p-8 rounded-2xl w-full max-w-sm text-center shadow-2xl relative">
        <button onClick={onClose} type="button" aria-label="Close" className="absolute top-4 right-4 text-neutral-500 hover:text-white"><X size={20} /></button>
        <div className="mb-6 flex justify-center"><div className="p-4 bg-indigo-500/10 rounded-full text-indigo-500"><Lock size={32} /></div></div>
        <h3 className="text-xl font-bold mb-2">Admin Access</h3>
        <p className="text-neutral-400 text-xs mb-6">Enter secure PIN to continue</p>
        <form onSubmit={onSubmit}>
          <input
            type="password"
            value={pin}
            onChange={(event) => setPin(event.target.value)}
            className={`w-full bg-black/50 border ${error ? 'border-red-500' : 'border-white/20'} rounded-lg p-3 text-center text-white tracking-widest text-lg focus:border-indigo-500 outline-none mb-4 transition-colors`}
            placeholder="••••••"
            autoFocus
            maxLength={6}
            inputMode="numeric"
          />
          {error && <p className="text-red-500 text-xs mb-4 animate-pulse">Incorrect PIN. Please try again.</p>}
          <button type="submit" className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 font-bold transition flex items-center justify-center gap-2">Access Dashboard <ArrowRight size={16} /></button>
        </form>
      </div>
    </div>
  );
}
