import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "CIPTA HOSPITAL INDONESIA",
    img: "/projects/cipta.png",
    url: "https://cipta-hospital-omega.vercel.app/",
    github: "https://github.com/Ramaaeln/cipta-hospital",
    techs: ["React.js", "Tailwind", "Supabase"]
  },
  {
    name: "WaroEng.e dul",
    img: "/projects/waroeng.jpeg",
    url: "https://waroeng-dul.vercel.app",
    github: "https://github.com/Ramaaeln/waroeng-dul",
    techs: ["React.js", "Tailwind", "Express", "Supabase", "Glitch"]
  },
  {
    name: "Portofolio v-2 | Referensi GitHub",
    img: "/projects/porto.png",
    url: "https://aboutrama.vercel.app/",
    github: "https://github.com/Ramaaeln/personal-web",
    techs: ["React.js", "Tailwind"]
  },
  {
    name: "Weather App",
    img: "/projects/weather.png",
    url: "https://ramaaeln.github.io/weather/",
    github: "https://github.com/Ramaaeln/weather",
    techs: ["JavaScript", "HTML5"]
  }
];

export default function ProjectsHero() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500">
        Past Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden border border-blue-100 bg-white shadow-sm group transition duration-500 hover:shadow-xl animate-fadeIn"
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-blue-200/70 via-white/20 to-transparent z-10 pointer-events-none" />

            <h3 className="absolute top-4 left-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-xl font-bold z-20 drop-shadow-sm">
              {project.name}
            </h3>

            <div className="absolute top-4 right-4 flex gap-3 z-20">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-cyan-500 transition-transform duration-300 hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-cyan-500 transition-transform duration-300 hover:scale-110"
                  title="Live Site"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 flex flex-wrap gap-2 z-30">
              {project.techs.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs bg-white text-slate-700 px-3 py-1 rounded-full font-medium shadow-sm hover:bg-blue-50 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Show More on GitHub */}
      <div className="flex justify-center mt-12">
        <a
          href="https://github.com/Ramaaeln"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          <FaGithub size={16} />
          Show more on GitHub
        </a>
      </div>
    </section>
  );
}
