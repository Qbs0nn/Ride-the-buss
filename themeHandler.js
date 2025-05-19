function initThemeSelector() {
  const themes = {
        default: {
            '--bg-primary': '#2c3e50',
            '--bg-darker': '#1a2530',
            '--bg-medium': '#34495e',
            
            '--accent-primary': '#3498db',
            '--accent-secondary': '#9b59b6',
            '--accent-dark': '#054977',
            '--accent-medium': '#2980b9',
            
            '--btn-primary-light': '#ff5252',
            '--btn-primary-dark': '#d50000',
            '--btn-primary': '#e74c3c',
            '--btn-secondary-light': '#212121',
            '--btn-secondary': '#000000',
            '--text-light': '#fff',
            
            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(255, 255, 255, 0.2)',
            '--glow-very-light': 'rgba(255, 255, 255, 0.1)',
            '--overlay': 'rgba(0, 0, 0, 0.4)',
            '--card-bg': 'rgba(52, 73, 94, 0.8)'
        },


        dark: {
            '--bg-primary': '#1a1a1a',
            '--bg-darker': '#0d0d0d',
            '--bg-medium': '#2c2c2c',
            
            '--accent-primary': '#00adb5',
            '--accent-secondary': '#e94560',
            '--accent-dark': '#393e46',
            '--accent-medium': '#00adb5',
            
            '--btn-primary-light': '#ff5252',
            '--btn-primary-dark': '#d50000',
            '--btn-primary': '#f05454',
            '--btn-secondary-light': '#212121',
            '--btn-secondary': '#000000',
            '--text-light': '#fff',
            
            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(255, 255, 255, 0.2)',
            '--glow-very-light': 'rgba(255, 255, 255, 0.1)',
            '--overlay': 'rgba(18, 11, 30, 0.4)',
            '--card-bg': 'rgba(44, 62, 80, 0.8)'
        },
        
        purple: {
            '--bg-primary': '#241734',
            '--bg-darker': '#120c1a',
            '--bg-medium': '#412a57',
            
            '--accent-primary': '#00bfff',
            '--accent-secondary': '#b83dfc',
            '--accent-dark': '#0d6efd',
            '--accent-medium': '#4287f5',
            
            '--btn-primary-light': '#ff47b5',
            '--btn-primary-dark': '#d71a97',
            '--btn-primary': '#fa198b',
            '--btn-secondary-light': '#362850',
            '--btn-secondary': '#120b1e',
            '--text-light': '#fff',
            
            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(184, 61, 252, 0.2)',
            '--glow-very-light': 'rgba(184, 61, 252, 0.1)',
            '--overlay': 'rgba(18, 11, 30, 0.4)',
            '--card-bg': 'rgba(65, 42, 87, 0.8)'
        },

        sunTemple: {
            '--bg-primary': '#f9f7f7',
            '--bg-darker': '#e2d1c3',
            '--bg-medium': '#f5e1a4',
            
            '--accent-primary': '#ff6b6b',
            '--accent-secondary': '#ff9a00',
            '--accent-dark': '#d50000',
            '--accent-medium': '#ff6b6b',
            
            '--btn-primary-light': '#ff5252',
            '--btn-primary-dark': '#d50000',
            '--btn-primary': '#e74c3c',
            '--btn-secondary-light': '#212121',
            '--btn-secondary': '#000000',
            '--text-light': '#fff',
            
            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(255, 255, 255, 0.2)',
            '--glow-very-light': 'rgba(255, 255, 255, 0.1)',
            '--overlay': 'rgba(18, 11, 30, 0.4)',
            '--card-bg': 'rgba(245, 225, 164, 0.8)'
        },

        forest: {
            '--bg-primary': '#2e3a24',
            '--bg-darker': '#1b2d16',
            '--bg-medium': '#4a5d3f',
            
            '--accent-primary': '#00bfff',
            '--accent-secondary': '#b83dfc',
            '--accent-dark': '#0d6efd',
            '--accent-medium': '#4287f5',
            
            '--btn-primary-light': '#ff47b5',
            '--btn-primary-dark': '#d71a97',
            '--btn-primary': '#fa198b',
            '--btn-secondary-light': '#362850',
            '--btn-secondary': '#120b1e',
            '--text-light': '#fff',
            
            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(184, 61, 252, 0.2)',
            '--glow-very-light': 'rgba(184, 61, 252, 0.1)',
            '--overlay': 'rgba(18, 11, 30, 0.4)',
            '--card-bg': 'rgba(74, 93, 63, 0.8)'
        },

        lava: {
            '--bg-primary': '#3b1f1f',
            '--bg-darker': '#240d0d',
            '--bg-medium': '#5c2e2e',

            '--accent-primary': '#ff5f00',
            '--accent-secondary': '#ff007f',
            '--accent-dark': '#b3003c',
            '--accent-medium': '#ff3c5f',

            '--btn-primary-light': '#ff9966',
            '--btn-primary-dark': '#cc3300',
            '--btn-primary': '#ff6600',
            '--btn-secondary-light': '#401a38',
            '--btn-secondary': '#1f0d18',
            '--text-light': '#ffffff',

            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(255, 102, 0, 0.2)',
            '--glow-very-light': 'rgba(255, 102, 0, 0.1)',
            '--overlay': 'rgba(31, 13, 24, 0.4)',
            '--card-bg': 'rgba(92, 46, 46, 0.8)'
        },

        pink: {
            '--bg-primary': '#f3c8e5',
            '--bg-darker': '#C599B6',
            '--bg-medium': '#daa6c9',

            '--accent-primary': '#e57585',
            '--accent-secondary': '#ff899b',
            '--accent-dark': '#E6B2BA',
            '--accent-medium': '#f1c9cf',

            '--btn-primary-light': '#ee5e73',
            '--btn-primary-dark': '#cc3300',
            '--btn-primary': '#c35061',
            '--btn-secondary-light': '#8e8485',
            '--btn-secondary': '#594649',
            '--text-light': '#ffffff',

            '--shadow-dark': 'rgba(0, 0, 0, 0.5)',
            '--shadow-medium': 'rgba(0, 0, 0, 0.3)',
            '--shadow-light': 'rgba(0, 0, 0, 0.2)',
            '--shadow-very-light': 'rgba(0, 0, 0, 0.1)',
            '--glow-light': 'rgba(255, 102, 0, 0.2)',
            '--glow-very-light': 'rgba(255, 102, 0, 0.1)',
            '--overlay': 'rgba(31, 13, 24, 0.4)',
            '--card-bg': 'rgba(92, 46, 46, 0.8)'
        }
    };
    
    const themeButtons = document.querySelectorAll('.themeButton');

    const savedTheme = localStorage.getItem('selectedTheme') || 'default';
    applyTheme(savedTheme);
    setActiveThemeButton(savedTheme);
    
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            applyTheme(theme);
            setActiveThemeButton(theme);
            localStorage.setItem('selectedTheme', theme);
        });
    });
    function applyTheme(themeName) {
        const root = document.documentElement;
        const theme = themes[themeName];
        
        for (const [property, value] of Object.entries(theme)) {
            root.style.setProperty(property, value);
        }
    }
    function setActiveThemeButton(themeName) {
        themeButtons.forEach(button => {
            if (button.getAttribute('data-theme') === themeName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}
document.addEventListener('DOMContentLoaded', initThemeSelector);