# Assets Directory

This directory contains all the assets used in the portfolio website.

## Directory Structure

- `images/`: Contains all image assets (JPG, PNG, AVIF, etc.)
- `documents/`: Contains all document assets (PDF, DOC, etc.)
- `icons/`: Contains all icon assets (SVG, PNG, etc.)
- `projects/`: Contains all project-specific assets

## Usage

Import assets from the main index file:

```jsx
import { profile, resume, react, portfolioScreenshot } from '@/assets';
```

Or import from specific subdirectories:

```jsx
import { profile } from '@/assets/images';
import { resume } from '@/assets/documents';
import { react } from '@/assets/icons';
import { portfolioScreenshot } from '@/assets/projects';
```

## Adding New Assets

1. Add the asset to the appropriate subdirectory
2. Update the corresponding index.js file in that subdirectory
3. The asset will be automatically available through the main index.js file 