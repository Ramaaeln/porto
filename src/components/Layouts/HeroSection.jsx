import Aurora from "../Fragments/AuroraEffect";
import { useDarkMode } from "../Fragments/ToggleMode";

export default function HeroSection() {
  const { isDark } = useDarkMode();

  return (
    <div
      className={`relative w-full h-screen overflow-hidden transition-colors duration-500 ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Aurora Layers */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full blur-3xl opacity-60 absolute top-0 left-0">
          <Aurora
            colorStops={
              isDark
                ? ["#0f172a", "#1e293b", "#334155"]
                : ["#e0f7fa", "#b2ebf2", "#ffffff"]
            }
            amplitude={1.2}
            blend={0.5}
            speed={0.4}
          />
        </div>
        <div className="w-full h-full blur-2xl opacity-50 absolute top-0 left-0">
          <Aurora
            colorStops={
              isDark
                ? ["#1e3a8a", "#0ea5e9", "#334155"]
                : ["#b2ebf2", "#80deea", "#ffffff"]
            }
            amplitude={0.8}
            blend={0.6}
            speed={0.7}
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className={`text-3xl md:text-4xl font-semibold ${
            isDark
              ? "text-cyan-300"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
          }`}
        >
          Hello, I'm Ramaa
        </h1>

        <h2
          className={`text-5xl md:text-6xl font-bold mt-2 ${
            isDark
              ? "text-white"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
          }`}
        >
          I'm a Web Developer
        </h2>

        <p
          className={`text-lg md:text-xl mt-4 max-w-xl ${
            isDark
              ? "text-slate-300"
              : "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"
          }`}
        >
          I’m diving into full-stack development with a strong foundation in front-end technologies.
        </p>
      </div>
    </div>
  );
}
