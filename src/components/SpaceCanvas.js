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

    class Star {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2;
        this.size = Math.random() * 1.5;
        this.baseAlpha = Math.random() * 0.5 + 0.3;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.alpha = this.baseAlpha;
        this.alphaDirection = 1;
      }

      update() {
        this.alpha += this.twinkleSpeed * this.alphaDirection;
        if (this.alpha > 1 || this.alpha < 0.2) {
          this.alphaDirection *= -1;
        }
      }

      draw(offsetX, offsetY) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.arc(this.x - offsetX, this.y - offsetY, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = [];
    const numStars = 200;

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const mouseOffsetX = (mouseX - width / 2);
      const mouseOffsetY = (mouseY - height / 2);

      stars.forEach(star => {
        star.update();
        star.draw(mouseOffsetX * star.z * 0.02, mouseOffsetY * star.z * 0.02);
      });

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
