# Instant Eats - React Food Delivery Platform

A modern, responsive food delivery website built with React and organized into modular components for easy maintenance.

## 🛠️ Setup Instructions

### 1. Create React App

```bash
npx create-react-app instant-eats
cd instant-eats
```

### 2. Create Component Structure

```bash
mkdir src/components
mkdir src/styles
```

### 3. Add Component Files

Create the following files in `src/components/`:

- `Header.js`
- `Hero.js`
- `Features.js`
- `HowItWorks.js`
- `AppDownload.js`
- `Testimonials.js`
- `Footer.js`

### 4. Add Styles

Create `src/styles/global.css` and add all the CSS styles.

### 5. Update App.js

Replace the contents of `src/App.js` with the main App component.

### 6. Clean up Default Files

- Remove contents of `src/App.css` (optional, since we're using global.css)
- Update `src/index.js` if needed

### 7. Start Development Server

```bash
npm start
```

## 📱 Features

- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop
- **Interactive Navigation**: Smooth scroll effects and mobile menu toggle
- **Modern UI/UX**: Clean design with hover effects and animations
- **Component-Based**: Modular architecture for easy maintenance
- **Optimized Performance**: Efficient React hooks usage

## 🎨 Component Overview

### Header.js

- Fixed navigation bar with scroll effects
- Mobile hamburger menu
- Authentication buttons
- Smooth anchor link navigation

### Hero.js

- Eye-catching banner with call-to-action buttons
- Background image with overlay
- Responsive typography

### Features.js

- Grid layout of service features
- Icon-based cards with hover effects
- Dynamic content rendering from array

### HowItWorks.js

- Step-by-step process visualization
- Numbered steps with connecting lines
- Responsive layout for mobile

### AppDownload.js

- App store download buttons
- Feature highlights for mobile app
- Dual-column layout with app preview

### Testimonials.js

- Customer review cards
- Star rating system
- Responsive grid layout

### Footer.js

- Multi-column footer layout
- Social media links
- Contact information and sitemap

## 🔧 Customization

### Adding New Features

1. Create new component file in `src/components/`
2. Import and add to `App.js`
3. Add corresponding styles to `global.css`

### Styling Changes

- All styles are centralized in `src/styles/global.css`
- CSS custom properties (variables) for easy theme changes
- Responsive breakpoints: 576px, 768px, 992px

### Data Management

- Feature data in `Features.js`
- Testimonials data in `Testimonials.js`
- Footer links in `Footer.js`
- Easy to convert to external API calls

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3**: Upload build folder to S3 bucket

## 🔗 Dependencies

- React 18+
- Font Awesome 6.4.0 (via CDN)
- Google Fonts (Poppins & Montserrat)

## 📝 Notes

- All external dependencies are loaded via CDN
- No additional npm packages required beyond React
- Images are served from Unsplash for demo purposes
- Mobile-first responsive design approach
- Semantic HTML structure for accessibility

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test responsiveness across devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
