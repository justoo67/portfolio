import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../constants/theme';

const Link = ({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = "transition-colors";
  
  const variants = {
    primary: `text-[var(--primary-color)] hover:underline`,
    secondary: `text-[var(--secondary-color)] hover:text-[var(--primary-color)]`,
  };

  return (
    <a 
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

export default Link;
