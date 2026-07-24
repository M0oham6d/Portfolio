import { useEffect, useRef } from 'react';

interface CyberBackgroundProps {
  isDarkMode: boolean;
}

export function CyberBackground({ isDarkMode }: CyberBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Responsive Canvas Resizing
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Grid nodes for interactive cyber-web
    const nodeCount = Math.min(60, Math.floor((width * height) / 25000));
    const nodes: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      char: string;
    }[] = [];

    const cyberChars = '01$#@%&_[]{}+=<>?/\\';

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
        char: cyberChars[Math.floor(Math.random() * cyberChars.length)],
      });
    }

    // Interactive mouse coordinates
    let mouse = { x: -1000, y: -1000, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Background color base
      ctx.fillStyle = isDarkMode ? '#020617' : '#f8fafc';
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = isDarkMode ? 'rgba(37, 99, 235, 0.03)' : 'rgba(37, 99, 235, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and connect cyber nodes
      nodes.forEach((node, i) => {
        // Move nodes
        node.x += node.vx;
        node.y += node.vy;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Interactive mouse push
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }

        // Draw character / node
        ctx.fillStyle = isDarkMode
          ? 'rgba(59, 130, 246, 0.25)'
          : 'rgba(37, 99, 235, 0.15)';
        ctx.font = `${node.size * 5 + 4}px monospace`;
        ctx.fillText(node.char, node.x, node.y);

        // Connect nodes to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const ndx = node.x - other.x;
          const ndy = node.y - other.y;
          const ndist = Math.hypot(ndx, ndy);

          if (ndist < 140) {
            const alpha = (1 - ndist / 140) * (isDarkMode ? 0.07 : 0.09);
            ctx.strokeStyle = isDarkMode
              ? `rgba(59, 130, 246, ${alpha})`
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });

      // Periodic character rotation
      if (Math.random() < 0.02) {
        const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
        randomNode.char = cyberChars[Math.floor(Math.random() * cyberChars.length)];
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 block pointer-events-none"
    />
  );
}
