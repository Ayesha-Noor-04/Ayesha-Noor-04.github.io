import { useEffect, useRef } from 'react';

const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const particles = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const createParticle = (x: number, y: number) => {
      return {
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 0,
        maxLife: 60 + Math.random() * 60
      };
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background that follows mouse
      const gradient = ctx.createRadialGradient(
        mousePosition.current.x,
        mousePosition.current.y,
        0,
        mousePosition.current.x,
        mousePosition.current.y,
        400
      );
      
      gradient.addColorStop(0, 'hsla(0, 100%, 25%, 0.1)'); // maroon
      gradient.addColorStop(0.3, 'hsla(210, 20%, 25%, 0.05)'); // gunmetal
      gradient.addColorStop(1, 'hsla(0, 0%, 4%, 0)'); // deep black
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add some particles near mouse
      if (Math.random() < 0.3) {
        particles.current.push(
          createParticle(
            mousePosition.current.x + (Math.random() - 0.5) * 100,
            mousePosition.current.y + (Math.random() - 0.5) * 100
          )
        );
      }

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        const alpha = 1 - (particle.life / particle.maxLife);
        const size = (1 - particle.life / particle.maxLife) * 3;

        if (alpha > 0 && size > 0) {
          ctx.save();
          ctx.globalAlpha = alpha * 0.6;
          ctx.fillStyle = 'hsl(0, 100%, 25%)'; // maroon
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        return particle.life < particle.maxLife;
      });

      // Draw connecting lines between nearby particles
      ctx.save();
      ctx.globalAlpha = 0.3;
      ctx.strokeStyle = 'hsl(210, 5%, 85%)'; // silver
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const dx = particles.current[i].x - particles.current[j].x;
          const dy = particles.current[i].y - particles.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles.current[i].x, particles.current[i].y);
            ctx.lineTo(particles.current[j].x, particles.current[j].y);
            ctx.globalAlpha = 0.3 * (1 - distance / 100);
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default DynamicBackground;