# Portfolio Website - Sarin M S

A modern, responsive portfolio website built with React, Tailwind CSS, and Vite.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🎨 Tailwind CSS for styling
- ⚡ Fast performance with Vite
- 🧭 Smooth scroll navigation
- 📂 Well-structured component architecture

## Project Structure

```
portfolio/
├── src/
│   ├── sections/
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── About.jsx       # About me section with skills
│   │   ├── Projects.jsx    # Projects showcase with filters
│   │   ├── Experience.jsx  # Work experience timeline
│   │   └── Footer.jsx      # Footer component
│   ├── assets/             # Images and static assets
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Public assets
└── package.json
```

## Installation & Setup

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Adding Your Content

### 1. Profile Image
- Add your profile image to `public/profile.jpg`

### 2. Project Images
- Create a `public/projects/` folder
- Add project images:
  - `isqip.jpg`
  - `snailometer.jpg`
  - `mvp.jpg`
  - `gds-cover.jpg`
  - `gds-individual.jpg`
  - `cloud-study.jpg`

### 3. Update Project Links
Edit `src/sections/Projects.jsx` to update:
- Project URLs
- Project descriptions
- Add/remove projects

### 4. Update Experience
Edit `src/sections/Experience.jsx` to update:
- Work positions
- Dates
- Descriptions

### 5. Update Contact Info
Edit `src/sections/Footer.jsx` to update:
- Social media links
- Email address
- Other contact information

## Technologies Used

- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **ESLint** - Code linting

## Customization

### Colors
The primary color scheme uses orange (#FF6B35). To change:
- Update `orange-500` classes in components
- Modify Tailwind config if needed

### Fonts
Currently using system fonts. To add custom fonts:
1. Import in `index.css`
2. Update font-family in Tailwind config

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Author

**Sarin M S**
- Front End Developer & Designer
- Computer Science (AI & ML) Student at CEC

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
