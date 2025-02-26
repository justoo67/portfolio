import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { colors } from '../constants/theme';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const theme = {
    colors: isDark ? {
      ...colors,
      background: {
        main: '#0a192f',
        light: '#112240',
      },
    } : {
      ...colors,
      background: {
        main: '#ffffff',
        light: '#f5f5f5',
      },
    },
    toggleTheme: () => setIsDark(!isDark),
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}; 