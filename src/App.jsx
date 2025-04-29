import React from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import Home from './components/pages/Home';

/**
 * App component that serves as the root component of the application
 * @returns {JSX.Element} App component
 */
const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;

