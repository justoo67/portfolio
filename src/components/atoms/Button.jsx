import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../constants/theme';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props 
}) => {
  const baseStyles = "border rounded transition-colors";
  
  const variants = {
    primary: `border-[${colors.primary.main}] text-[${colors.primary.main}] hover:bg-[${colors.primary.light}]`,
    secondary: `border-[${colors.text.secondary}] text-[${colors.text.secondary}] hover:bg-[${colors.text.secondary}]/10`,
  };

  const sizes = {
    small: 'px-4 py-2',
    medium: 'px-6 py-3',
    large: 'px-8 py-4',
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Button;
