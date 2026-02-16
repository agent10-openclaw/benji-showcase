// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animated counter for stats
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        // Handle percentage values
        if (element.textContent.includes('%')) {
            element.textContent = value + '%';
        } 
        // Handle dollar values
        else if (element.textContent.includes('$')) {
            element.textContent = '$' + value.toLocaleString();
        }
        // Handle decimal values (like 99.9)
        else if (end < 200 && end.toString().includes('.')) {
            element.textContent = (progress * end).toFixed(1);
        }
        // Regular numbers
        else {
            element.textContent = value.toLocaleString();
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Intersection Observer for stats animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const valueElements = entry.target.querySelectorAll('[data-target]');
            valueElements.forEach(element => {
                const target = parseFloat(element.dataset.target);
                const parent = element.parentElement;
                
                // Check if it's a dollar value
                if (parent && parent.textContent.includes('$')) {
                    element.textContent = '0';
                    animateCounter(element, 0, target, 2000);
                } else {
                    animateCounter(element, 0, target, 2000);
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all stat cards
document.addEventListener('DOMContentLoaded', () => {
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        statsObserver.observe(card);
    });
});

// Add glitch effect to hero title on hover (optional cool effect)
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    let glitchInterval;
    
    heroTitle.addEventListener('mouseenter', () => {
        let iterations = 0;
        const originalText = heroTitle.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        
        glitchInterval = setInterval(() => {
            if (iterations >= originalText.length) {
                heroTitle.textContent = originalText;
                clearInterval(glitchInterval);
                return;
            }
            
            heroTitle.textContent = originalText
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    if (char === ' ' || char === '\n') {
                        return char;
                    }
                    return glitchChars[Math.floor(Math.random() * glitchChars.length)];
                })
                .join('');
            
            iterations += 1 / 3;
        }, 30);
    });
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Add typing indicator animation
const terminalCursor = document.querySelector('.cursor');
if (terminalCursor) {
    setInterval(() => {
        terminalCursor.style.opacity = terminalCursor.style.opacity === '0' ? '1' : '0';
    }, 500);
}

// Easter egg: Konami code
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateMatrixMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateMatrixMode() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = 'BENJI010101';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    let frameCount = 0;
    const maxFrames = 200;
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 14, 20, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff9f';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
        
        frameCount++;
        if (frameCount < maxFrames) {
            requestAnimationFrame(draw);
        } else {
            canvas.remove();
        }
    }
    
    draw();
}

console.log('%c🐕 BENJI.AI', 'color: #00ff9f; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(0,255,159,0.5);');
console.log('%cIntelligent Memory. Local First. Always Learning.', 'color: #00d4ff; font-size: 14px;');
console.log('%cTry the Konami code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA', 'color: #a0a0a0; font-size: 12px;');
