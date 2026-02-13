import React, { useRef, useEffect } from 'react';

const SpaceCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = width / 2;
    let mouseY = height / 2;

    // --- Stars ---
    class Star {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 3;
        this.size = Math.random() * 1.8 + 0.2;
        this.baseAlpha = Math.random() * 0.5 + 0.3;
        this.twinkleSpeed = Math.random() * 0.015 + 0.003;
        this.alpha = this.baseAlpha;
        this.alphaDirection = 1;
        // Some stars have color
        const r = Math.random();
        if (r < 0.08) this.color = [56, 189, 248]; // sky blue
        else if (r < 0.14) this.color = [168, 85, 247]; // purple
        else this.color = [255, 255, 255]; // white
      }
      update() {
        this.alpha += this.twinkleSpeed * this.alphaDirection;
        if (this.alpha > 1 || this.alpha < 0.15) this.alphaDirection *= -1;
      }
      draw(offsetX, offsetY) {
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha})`;
        ctx.arc(this.x - offsetX, this.y - offsetY, this.size, 0, Math.PI * 2);
        ctx.fill();
        // Glow for brighter stars
        if (this.size > 1.2) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.15})`;
          ctx.arc(this.x - offsetX, this.y - offsetY, this.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // --- Shooting Stars ---
    class ShootingStar {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * width * 1.5;
        this.y = Math.random() * height * 0.5 - height * 0.1;
        this.len = Math.random() * 80 + 40;
        this.speed = Math.random() * 8 + 6;
        this.alpha = 0;
        this.fadeIn = true;
        this.life = 0;
        this.maxLife = Math.random() * 60 + 40;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
      }
      update() {
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.life++;
        if (this.fadeIn && this.alpha < 1) {
          this.alpha = Math.min(1, this.alpha + 0.08);
          if (this.alpha >= 1) this.fadeIn = false;
        }
        if (this.life > this.maxLife * 0.6) {
          this.alpha = Math.max(0, this.alpha - 0.04);
        }
        if (this.life > this.maxLife || this.alpha <= 0) {
          this.reset();
        }
      }
      draw() {
        const tailX = this.x - Math.cos(this.angle) * this.len;
        const tailY = this.y - Math.sin(this.angle) * this.len;
        const gradient = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
        gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${this.alpha * 0.8})`);
        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        // Head glow
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = [];
    const numStars = 280;
    const shootingStars = [new ShootingStar(), new ShootingStar(), new ShootingStar()];
    let shootingStarTimer = 0;

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle nebula gradients
      const nebulaGrd1 = ctx.createRadialGradient(
        width * 0.2, height * 0.3, 0,
        width * 0.2, height * 0.3, width * 0.35
      );
      nebulaGrd1.addColorStop(0, 'rgba(56, 189, 248, 0.012)');
      nebulaGrd1.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGrd1;
      ctx.fillRect(0, 0, width, height);

      const nebulaGrd2 = ctx.createRadialGradient(
        width * 0.8, height * 0.7, 0,
        width * 0.8, height * 0.7, width * 0.3
      );
      nebulaGrd2.addColorStop(0, 'rgba(168, 85, 247, 0.01)');
      nebulaGrd2.addColorStop(1, 'transparent');
      ctx.fillStyle = nebulaGrd2;
      ctx.fillRect(0, 0, width, height);

      const mouseOffsetX = (mouseX - width / 2);
      const mouseOffsetY = (mouseY - height / 2);

      stars.forEach((star) => {
        star.update();
        star.draw(mouseOffsetX * star.z * 0.02, mouseOffsetY * star.z * 0.02);
      });

      // Shooting stars
      shootingStarTimer++;
      shootingStars.forEach((ss) => {
        ss.update();
        ss.draw();
      });
      // Randomly trigger a new one
      if (shootingStarTimer % 180 === 0 && Math.random() < 0.5) {
        shootingStars[Math.floor(Math.random() * shootingStars.length)].reset();
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    initStars();
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default SpaceCanvas;
