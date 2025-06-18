# 🌟 Skincare Frontend Application

A modern, elegant skincare e-commerce frontend built with React, featuring smooth animations and a beautiful user interface.

## ✨ Features

### 🎨 **Smooth Reveal Animations**
- **Loading Screen**: Elegant loading experience with progress bar and animated dots
- **Page Transitions**: Smooth fade-in animations after initial load
- **Staggered Element Reveals**: Each component animates in sequence for a polished feel
- **Interactive Hover Effects**: Scale, shadow, and color transitions on all interactive elements

### 🏠 **Landing Page Components**
- **Header Navigation**: Clean navigation with hover effects
- **Hero Section**: "GLOW NATURALLY" main heading with supporting text
- **Product Showcase**: Featured product images with overlay information
- **Call-to-Action**: "Shop Now" button with smooth hover animations
- **Brand Messaging**: Compelling copy about skincare benefits

### 🛍️ **E-commerce Features**
- **Shopping Cart**: Cart icon with item count display
- **Favorites**: Heart icon for wishlist functionality
- **User Account**: User profile access
- **Product Categories**: Navigation for different product types

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Flexible Layout**: Adapts seamlessly from mobile to desktop
- **Touch-Friendly**: Optimized for touch interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Tech Stack

### **Core Technologies**
- **React 19.1.0** - Modern React with latest features
- **Vite 6.3.5** - Fast build tool and development server
- **Tailwind CSS 4.1.10** - Utility-first CSS framework

### **UI Libraries**
- **React Icons 5.5.0** - Beautiful icon library
- **Font Awesome 6.7.2** - Comprehensive icon set

### **Development Tools**
- **ESLint 9.25.0** - Code linting and formatting
- **TypeScript Support** - Type definitions for React

## 🎭 Animation System

### **Loading Screen Animations**
```javascript
// Progress bar with realistic loading simulation
const progressInterval = setInterval(() => {
  setProgress(prev => prev + Math.random() * 15 + 5);
}, 200);
```

### **Page Reveal Animations**
- **Fade In**: `opacity-0` → `opacity-100`
- **Slide Up**: `translate-y-8` → `translate-y-0`
- **Scale**: `scale-95` → `scale-100`

### **Custom CSS Keyframes**
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### **Staggered Animation Delays**
- Header: 0ms delay
- Left text: 200ms delay
- Main heading: 300ms delay
- Right image: 400ms delay
- Background text: 500ms delay
- Main image: 600ms delay
- Product card: 800ms delay
- Shop button: 700ms delay
- Bottom text: 900ms delay

## 🎨 Design System

### **Color Palette**
- **Primary Background**: `#F2F5E5` (Light cream)
- **Secondary Background**: `#FCFCF3` (Off-white)
- **Primary Text**: `#1F2B2A` (Dark green)
- **Accent Color**: `#D9E2C8` (Sage green)
- **Muted Text**: `#C0C8BB` (Light sage)

### **Typography**
- **Font Family**: Inter (sans-serif)
- **Font Weights**: Normal (400), Medium (500), Extra Bold (800)
- **Responsive Sizing**: Clamp functions for fluid typography

### **Spacing & Layout**
- **Container Max Width**: 1200px
- **Responsive Padding**: 6px (mobile) → 24px (desktop)
- **Grid System**: Flexbox with responsive breakpoints

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── LoadingScreen.jsx      # Loading animation component
│   │   ├── SkincareLandingPage.jsx # Main landing page
│   │   ├── SkincareProducts.jsx   # Products section
│   │   ├── BeautyProductPage.jsx  # Beauty products
│   │   └── SkincareFaq.jsx        # FAQ section
│   ├── assets/
│   │   ├── img1.png              # Hero product image
│   │   └── img2.jpg              # Product tube image
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # App entry point
│   ├── index.css                 # Global styles & animations
│   └── App.css                   # App-specific styles
├── public/                       # Static assets
├── package.json                  # Dependencies & scripts
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## 🎯 Key Components

### **LoadingScreen.jsx**
- Manages loading state and progress
- Animated progress bar with percentage
- Staggered dot animations
- Smooth fade-in/out transitions

### **SkincareLandingPage.jsx**
- Main landing page with hero section
- Responsive navigation header
- Product showcase with overlay information
- Call-to-action buttons with hover effects

### **App.jsx**
- Manages global loading state
- Coordinates page transitions
- Handles animation timing and sequencing

## 🔧 Customization

### **Modifying Animation Timing**
```javascript
// In App.jsx - Change loading duration
const loadingTimer = setTimeout(() => {
  setIsLoading(false);
}, 2000); // Adjust this value
```

### **Customizing Colors**
```css
/* In index.css - Update color variables */
:root {
  --primary-bg: #F2F5E5;
  --primary-text: #1F2B2A;
  --accent-color: #D9E2C8;
}
```

### **Adding New Animations**
```css
/* In index.css - Add custom keyframes */
@keyframes yourAnimation {
  from { /* initial state */ }
  to { /* final state */ }
}
```

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Vercel/Netlify**
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Vite** for the lightning-fast build tool
- **React Icons** for the beautiful icon library

---

**Built with ❤️ for beautiful skincare experiences**
