# Components Directory

This directory contains all the React components used in the portfolio website, organized according to atomic design principles.

## Directory Structure

- `atoms/`: Basic building blocks of the UI (buttons, links, inputs, etc.)
- `molecules/`: Simple combinations of atoms (form groups, navigation items, etc.)
- `organisms/`: Complex combinations of molecules and atoms (sections, forms, etc.)
- `templates/`: Page layouts that contain organisms, molecules, and atoms
- `pages/`: Complete pages that use templates

## Component Hierarchy

```
src/components/
├── atoms/              # Basic UI elements
│   ├── Button.jsx      # Button component
│   └── Link.jsx        # Link component
├── molecules/          # Combinations of atoms
│   └── SocialLinks.jsx # Social media links
├── organisms/          # Complex UI components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects section
│   └── Contacts.jsx    # Contact section
├── templates/          # Page layouts
│   └── MainLayout.jsx  # Main layout template
└── pages/              # Complete pages
    └── Home.jsx        # Home page
```

## Usage

Components should be imported from their respective directories based on their complexity:

```jsx
// Importing an atom
import Button from '@/components/atoms/Button';

// Importing a molecule
import SocialLinks from '@/components/molecules/SocialLinks';

// Importing an organism
import Navbar from '@/components/organisms/Navbar';

// Importing a template
import MainLayout from '@/components/templates/MainLayout';

// Importing a page
import Home from '@/components/pages/Home';
```

## Adding New Components

1. Determine the complexity of the component (atom, molecule, organism, template, or page)
2. Create the component in the appropriate directory
3. Add proper documentation and PropTypes
4. Import and use the component in the appropriate parent component 