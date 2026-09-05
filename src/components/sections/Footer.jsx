import { Instagram, MessageCircle } from 'lucide-react';

export default function Footer({ onAdminOpen }) {
  return (
    <footer id="contact" className="py-8 bg-neutral-900 border-t border-white/5 text-center">
      <div className="flex justify-center gap-6 mb-8">
        <a href="https://instagram.com/arifaridho" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 group">
          <Instagram size={24} className="group-hover:text-indigo-500 transition-colors" />
        </a>
        <a href="https://wa.me/6285383829642" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 group">
          <MessageCircle size={24} className="group-hover:text-green-500 transition-colors" />
        </a>
      </div>
      <p className="text-neutral-500 text-sm mb-4">© {new Date().getFullYear()} Motion Portfolio. All rights reserved.</p>
      <button onClick={onAdminOpen} type="button" className="text-[10px] text-neutral-800 hover:text-neutral-600 transition-colors uppercase tracking-widest font-bold">Arifaridho</button>
    </footer>
  );
}
