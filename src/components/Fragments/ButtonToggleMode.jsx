import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../Fragments/ToggleMode';

export default function DarkModeToggle() {
  const { isDark, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center px-3 py-2 rounded-full transition-all duration-300 ${
        isDark 
          ? 'bg-gray-700/80 hover:bg-gray-600 text-gray-200 border border-gray-600/50' 
          : 'bg-white/30 hover:bg-white/50 text-gray-800 border border-white/40'
      }`}
      aria-label="Toggle dark mode"
    >
      <div className="flex items-center space-x-1">
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
        <span className="text-xs font-medium">
          {isDark ? 'Dark' : 'Light'}
        </span>
      </div>
    </button>
  );
}