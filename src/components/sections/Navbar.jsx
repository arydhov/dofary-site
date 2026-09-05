export default function Navbar({ name, scrolled }) {
  const [firstName, ...rest] = name.trim().split(/\s+/);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center max-w-7xl">
        <a href="#top" className="text-sm md:text-base font-bold text-white" aria-label="Back to top">
          <span>{firstName}</span> <span className="text-indigo-500">{rest.join(' ')}</span>
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-400">
          <a href="#experience" className="hover:text-indigo-400 transition-colors">Experience</a>
          <a href="#work" className="hover:text-indigo-400 transition-colors">Work</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>
        <button className="md:hidden text-white" aria-label="Menu" type="button">
          <span className="block w-6 h-0.5 bg-white mb-1.5" />
          <span className="block w-6 h-0.5 bg-white" />
        </button>
      </div>
    </nav>
  );
}
