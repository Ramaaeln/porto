import { useDarkMode } from "../Fragments/ToggleMode";

const techs = [
  null, null,
  { name: "JavaScript", src: "/icons/javascript.svg", glowColor: "#F7DF1E" },
  { name: "Express", src: "/icons/express.svg", glowColor: "#AAAAAA" },
  { name: "React", src: "/icons/react.svg", glowColor: "#61DAFB" },
  null, null, null,
  { name: "Node", src: "/icons/nodedotjs.svg", glowColor: "#339933" },
  { name: "Tailwindcss", src: "/icons/tailwindcss.svg", glowColor: "#06B6D4" },
  { name: "PostgreSQL", src: "/icons/postgresql.svg", glowColor: "#336791" },
  { name: "Supabase", src: "/icons/supabase.svg", glowColor: "#3FCF8E" },
  { name: "MySQL", src: "/icons/mysql.svg", glowColor: "#4479A1" },
  null, null, null,
  { name: "CSS3", src: "/icons/css.svg", glowColor: "#1572B6" },
  null,
  { name: "HTML5", src: "/icons/html5.svg", glowColor: "#E34F26" },
  null, null
];

export default function SkillsHero() {
  const { isDark } = useDarkMode();

  return (
    <section className={`relative py-24 overflow-hidden transition-colors duration-500 ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-48 blur-3xl opacity-60 z-0 pointer-events-none ${
        isDark
          ? "bg-gradient-to-b from-blue-800/30 via-transparent to-transparent"
          : "bg-gradient-to-b from-cyan-300/30 via-transparent to-transparent"
      }`} />

      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-48 blur-3xl opacity-60 z-0 pointer-events-none ${
        isDark
          ? "bg-gradient-to-t from-cyan-800/30 via-transparent to-transparent"
          : "bg-gradient-to-t from-blue-300/30 via-transparent to-transparent"
      }`} />

      <h2 className="relative z-10 text-center text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mb-10">
        Techstack I Use on a Daily Basis
      </h2>

      <div className="relative z-10 grid grid-cols-5 sm:grid-cols-6 md:grid-cols-7 gap-4 px-4 max-w-6xl mx-auto">
        {techs.map((tech, index) => {
          const glow = tech?.glowColor ?? (isDark ? "#334155" : "#CBD5E1");

          return (
            <div
              key={index}
              className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-xl border flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-105 ${
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
              }`}
              style={{
                boxShadow: `0 0 10px ${glow}33`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 20px ${glow}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 10px ${glow}33`;
              }}
            >
              {tech ? (
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
