import { FaAward, FaLaptopCode, FaShieldAlt, FaUsers } from "react-icons/fa";
import { useDarkMode } from "../components/Fragments/ToggleMode";

export default function AboutPages() {
  const { isDark } = useDarkMode();

  return (
    <div
      className={`pt-38 -mt-30 pb-20 transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-white text-gray-800"
      }`}
      id="about"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500">
          About Me
        </h2>
        <p
          className={`mt-2 text-sm md:text-base max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Passionate 4th-semester Computer Science student at Universitas
          Pamulang, primarily focused on Full-Stack Web Development, with a
          foundational understanding of Cybersecurity concepts.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center md:text-left">
        <h3
          className={`text-2xl font-semibold mb-4 ${
            isDark ? "text-cyan-400" : "text-blue-700"
          }`}
        >
          Hello! I'm Rama 👋
        </h3>
        <p className={`text-base leading-relaxed ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          I am a 4th-semester Computer Science student at Universitas Pamulang
          with a strong interest in Full-Stack Web Development. Since my 3rd
          semester, I’ve been actively building applications using technologies
          like React.js, Node.js, Express.js, and Supabase.
        </p>
        <p className={`text-base leading-relaxed mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Recently, I joined the TalentHub Batch 17 Full Stack Web Developer
          program. My final project, a food ordering web app built with React,
          Express, and Supabase, was selected as the best project of the batch.
        </p>
        <p className={`text-base leading-relaxed mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          I also participated in a university hackathon where my team was
          awarded Best Team. In this project, I developed a secure backend and
          API system that was tested by cybersecurity experts using tools like
          Burp Suite to ensure protection against common vulnerabilities.
        </p>
        <p className={`text-base leading-relaxed mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Additionally, I served as the PIC Leader in a Human-Computer
          Interaction course project, where I coordinated my team to meet our
          project objectives effectively.
        </p>
        <p className={`text-base leading-relaxed mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          I enjoy learning, sharing ideas, and receiving feedback to grow
          further as a developer. I’m always open to collaboration and excited
          to contribute to secure and impactful projects.
        </p>

        <a
          href="https://github.com/Ramaaeln"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-5 py-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white rounded-full hover:scale-105 transition shadow-md"
        >
          View GitHub Profile →
        </a>
      </div>

      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 rounded-full mx-auto my-16"></div>

      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            icon: <FaAward className="text-2xl mx-auto mb-2" />,
            title: "Best Project",
            subtitle: "TalentHub Batch 17",
          },
          {
            icon: <FaShieldAlt className="text-2xl mx-auto mb-2" />,
            title: "Backend Security",
            subtitle: "Resists SQLi & Burp Suite",
          },
          {
            icon: <FaLaptopCode className="text-2xl mx-auto mb-2" />,
            title: "Tech Stack",
            subtitle: "React, Express, Supabase",
          },
          {
            icon: <FaUsers className="text-2xl mx-auto mb-2" />,
            title: "Team Leader",
            subtitle: "HCI PIC Leader",
          },
        ].map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-5 shadow hover:shadow-md transition text-center border ${
              isDark
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-blue-50 border-blue-200 text-gray-800"
            }`}
          >
            <div className={isDark ? "text-cyan-400" : "text-blue-500"}>
              {card.icon}
            </div>
            <h4 className={`font-semibold ${isDark ? "text-cyan-300" : "text-blue-700"}`}>
              {card.title}
            </h4>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
