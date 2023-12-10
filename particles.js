const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 1;
        this.speedX = (Math.random() * 2)/0.5; 
        this.speedY = (Math.random() * 2); 
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0) this.size -= 0.1;
    }

    draw() {
        ctx.shadowBlur = 20; // Adjust the glow effect strength
        ctx.shadowColor = 'rgba(128,0,128,0.8)'; // Adjust the glow color and alpha
        ctx.fillStyle = 'rgba(201,99,237,' + this.size + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Reset shadow properties to avoid affecting other drawings
        ctx.shadowBlur = 0;
        ctx.shadowColor = 'transparent';
    }
}

const particles = [];
let particleIndex = 0;

function createParticleWithDelay() {
    setTimeout(function () {
        particles.push(new Particle());
        particleIndex++;

        if (particleIndex < 100) {
            createParticleWithDelay();
        }
    }, 100); // Adjust the delay (in milliseconds) between particle creation
}

function removeParticles() {
    for (let i = 0; i < particles.length; i++) {
        if (particles[i].size <= 0.2) {
            particles.splice(i, 1);
            i--;
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    createParticleWithDelay();

    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }

    removeParticles();

    requestAnimationFrame(animateParticles);
}

animateParticles();

// Adjust canvas size on window resize
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
