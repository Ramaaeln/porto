import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useDarkMode } from "../Fragments/ToggleMode"; // pastikan path ini sesuai struktur project-mu

export default function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  const { isDark } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition transform hover:scale-110 ${
          isDark
            ? "bg-slate-700 text-white hover:bg-slate-600"
            : "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 text-white"
        }`}
        aria-label="Scroll to top"
      >
        <FaArrowUp size={16} />
      </button>
    )
  );
}
