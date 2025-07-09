import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useDarkMode } from "../Fragments/ToggleMode";

export default function Footer() {
  const { isDark } = useDarkMode();

  return (
    <footer
      className={`py-8 transition-colors duration-500 border-t ${
        isDark
          ? "bg-gray-900 text-white border-slate-700"
          : "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white border-cyan-300"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-xl font-semibold">Let's Connect</h3>

        <div className="flex gap-5 text-2xl">
          <a
            href="https://github.com/Ramaaeln"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ramaelansary/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdullahramadanelansary@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/80 transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p
          className={`text-sm mt-2 ${
            isDark ? "text-slate-300" : "text-white/90"
          }`}
        >
          Made with ❤️ Abdullah Ramadan Elansary
          <br />
          Depok, West Java, Indonesia
        </p>
      </div>
    </footer>
  );
}
