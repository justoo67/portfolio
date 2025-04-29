import React from 'react';
import MainLayout from '../templates/MainLayout';
import Hero from '../organisms/Hero';
import About from '../organisms/About';
import Skills from '../organisms/Skills';
import Projects from '../organisms/Projects';
import Contacts from '../organisms/Contacts';

/**
 * Home page component that serves as the main page of the application
 * @returns {JSX.Element} Home page component
 */
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </MainLayout>
  );
};

export default Home; 