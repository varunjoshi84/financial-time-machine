import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css';

// Add Font Awesome
const fontAwesome = document.createElement('link');
fontAwesome.rel = 'stylesheet';
fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
document.head.appendChild(fontAwesome);

// Add Google Fonts
const googleFonts = document.createElement('link');
googleFonts.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap';
googleFonts.rel = 'stylesheet';
document.head.appendChild(googleFonts);

// Add Chart.js
const chartJs = document.createElement('script');
chartJs.src = 'https://cdn.jsdelivr.net/npm/chart.js';
document.head.appendChild(chartJs);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); 