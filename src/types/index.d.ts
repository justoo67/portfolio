export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  path: string;
}

export interface Theme {
  colors: {
    primary: {
      main: string;
      light: string;
    };
    background: {
      main: string;
      light: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  };
  toggleTheme: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  [key: string]: any;
}

export interface LinkProps {
  children: React.ReactNode;
  href: string;
  variant?: 'primary' | 'secondary';
  className?: string;
  [key: string]: any;
} 