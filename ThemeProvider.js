import React, { createContext, useState } from 'react';
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#00f',
    background: '#000',
    font: 'Arial',
    appName: 'ATM Smart',
  });

  const updateTheme = (newTheme) => setTheme({...theme, ...newTheme});
  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
