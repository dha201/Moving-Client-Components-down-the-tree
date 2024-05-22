'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const defaultState = {
  theme: 'light', // Default theme
  setTheme: () => {} // Placeholder function
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
