'use client';

import { useTheme } from 'next-themes';

const THEMES = { DARK: 'dark', LIGHT: 'light' };
const { DARK, LIGHT } = THEMES;

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    return theme === DARK ? setTheme(LIGHT) : setTheme(DARK);
  };

  return (
    <div className="flex space-x-4 justify-center items-center border border-2 border-dashed border-purple-400 p-4">
      <input
        id="default-checkbox"
        type="checkbox"
        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 sr-only"
        checked={theme === LIGHT}
        onChange={handleThemeChange}
      />
      <label
        htmlFor="default-checkbox"
        className="text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer text-xl"
      >
        Switch to {theme === DARK ? LIGHT : DARK} Mode
      </label>

      <label htmlFor="theme-switch" className="">
        <svg
          className="dark:hidden animate-pulse"
          width="80"
          height="80"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-yellow-300"
            d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
          />
          <path
            className="fill-yellow-100"
            d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 20 20"
          className="hidden dark:block shadow-xl animate-pulse"
        >
          <path
            className="fill-slate-300"
            d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
          />
          <path
            className="fill-slate-200"
            d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
          />
        </svg>

        <span className="sr-only">Switch to light / dark version</span>
      </label>
    </div>
  );
}
