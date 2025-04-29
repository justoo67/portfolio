import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../organisms/Navbar';
import SocialLinks from '../molecules/SocialLinks';

/**
 * MainLayout component that provides the main structure for the application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} MainLayout component
 */
const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      <Navbar />
      {children}
      <SocialLinks />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout; 