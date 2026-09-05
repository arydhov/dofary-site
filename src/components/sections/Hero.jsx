import Stat from '../common/Stat';

export default function Hero({ hero, fallbackImage }) {
  const imageSrc = hero.imageSrc || fallbackImage;

  return (
    <header id="top" className="relative h-screen min-h-[600px] flex items-center bg-neutral-950 overflow-hidden">
      <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[30vw] h-[30vw] bg-violet-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 h-full relative z-10 max-w-7xl">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-12 lg:gap-8">
          <div className="w-full max-w-[550px] flex flex-col justify-center relative z-20 pt-16 lg:pt-20 lg:pl-10">
            <h1 className="text-3xl md:text-3xl lg:text-4xl font-black text-white leading-tight mb-6 tracking-tight">
              {hero.headlinePart1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-500 to-indigo-600">{hero.headlinePart2}</span>
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              <Stat value={hero.statsExp} label="Years Experience" />
              <Stat value={hero.statsProj} label="Projects Done" />
            </div>
            <p className="text-neutral-400 text-sm max-w-md leading-relaxed mb-8">{hero.description}</p>
            <a href="#work" className="group flex items-center gap-3 text-white font-bold text-sm hover:text-indigo-400 transition-colors">
              <div className="w-10 h-px bg-white group-hover:bg-indigo-400 transition-colors" />
              Watch Portfolio
            </a>
          </div>
          <div className="hidden lg:flex w-full max-w-[550px] h-full relative z-10 items-end justify-center pointer-events-none select-none">
            <img
              src={imageSrc}
              alt="Profile"
              className="w-auto h-[110%] object-contain object-bottom filter grayscale contrast-110"
              style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              onError={(event) => { event.currentTarget.src = fallbackImage; }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
