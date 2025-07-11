import GitHubCalendar from 'react-github-calendar';
import { useDarkMode } from "../Fragments/ToggleMode";

export default function GitHubStats() {
  const { isDark } = useDarkMode();

  return (
    <section
      className={`py-16 text-center transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 mb-6">
        GitHub Contributions
      </h2>

      <div className="flex justify-center px-4 sm:px-0">
        <div
          className={`rounded-lg border shadow-md p-4 overflow-x-auto transition-colors duration-500 max-w-full ${
            isDark
              ? "border-slate-700 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800"
              : "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
          }`}
          style={{ width: "max-content", maxWidth: "100%" }}
        >
          <GitHubCalendar
            username="Ramaaeln"
            blockSize={14}
            blockMargin={5}
            fontSize={14}
            colorScheme={isDark ? "dark" : "light"}
            theme={{
              light: ['#ebf8ff', '#90cdf4', '#63b3ed', '#4299e1', '#3182ce'],
              dark: ['#1e293b', '#334155', '#475569', '#64748b', '#cbd5e1'],
            }}
          />
        </div>
      </div>

      <p className={`mt-4 text-sm transition-colors duration-500 ${
        isDark ? "text-slate-400" : "text-slate-500"
      }`}>
        Based on public contributions on GitHub
      </p>
    </section>
  );
}
