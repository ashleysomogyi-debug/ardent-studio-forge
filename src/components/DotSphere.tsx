import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  z: number;
  color: string;
}

const pickColor = (i: number): string => {
  if (i % 20 === 0) return "rgba(255, 107, 107, 0.8)"; // coral 5%
  if (i % 10 === 0) return "rgba(110, 221, 196, 0.6)"; // mint 10%
  if (i % 4 === 0) return "rgba(79, 195, 247, 0.6)"; // cyan 25%
  return "rgba(195, 247, 58, 0.5)"; // lime 60%
};

const N = 280;
const points: Point[] = [];
const goldenAngle = Math.PI * (3 - Math.sqrt(5));
for (let i = 0; i < N; i++) {
  const y = 1 - (i / (N - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = goldenAngle * i;
  const x = Math.cos(theta) * radius;
  const z = Math.sin(theta) * radius;
  points.push({ x, y, z, color: pickColor(i) });
}

const latitudes = [-0.7, -0.4, -0.15, 0.15, 0.4, 0.7];

const DotSphere = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    let rotationY = 0;
    let rotationX = 0;
    let rafId = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;
      const sphereR = Math.min(width, height) * 0.45;

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      const transform = (x: number, y: number, z: number) => {
        // rotate around Y
        let x1 = x * cosY + z * sinY;
        let z1 = -x * sinY + z * cosY;
        // rotate around X
        let y1 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;
        const scale = 1 / (1 - z2 * 0.5);
        return {
          sx: cx + x1 * sphereR * scale,
          sy: cy + y1 * sphereR * scale,
          z: z2,
        };
      };

      // latitude rings first
      ctx.strokeStyle = "rgba(79, 195, 247, 0.08)";
      ctx.lineWidth = 1;
      for (const lat of latitudes) {
        const r = Math.sqrt(1 - lat * lat);
        ctx.beginPath();
        for (let i = 0; i <= 60; i++) {
          const t = (i / 60) * Math.PI * 2;
          const px = Math.cos(t) * r;
          const pz = Math.sin(t) * r;
          const p = transform(px, lat, pz);
          if (i === 0) ctx.moveTo(p.sx, p.sy);
          else ctx.lineTo(p.sx, p.sy);
        }
        ctx.stroke();
      }

      // dots — sort back-to-front
      const projected = points.map((p) => {
        const t = transform(p.x, p.y, p.z);
        return { ...t, color: p.color };
      });
      projected.sort((a, b) => a.z - b.z);

      for (const p of projected) {
        const dotRadius = 1 + (p.z + 1) * 1.5;
        const depthAlpha = 0.4 + ((p.z + 1) / 2) * 0.6;
        // multiply existing color alpha by depthAlpha
        const m = p.color.match(/rgba\(([^)]+)\)/);
        if (!m) continue;
        const [r, g, b, a] = m[1].split(",").map((s) => parseFloat(s.trim()));
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a * depthAlpha})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, dotRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReduced = reduced.matches;

    const loop = () => {
      rotationY += 0.0008;
      rotationX += 0.0002;
      draw();
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      if (isReduced) {
        draw();
      } else {
        rafId = requestAnimationFrame(loop);
      }
    };

    const onResize = () => {
      setSize();
      draw();
    };

    const onReducedChange = (e: MediaQueryListEvent) => {
      isReduced = e.matches;
      start();
    };

    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", onReducedChange);
    start();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", onReducedChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7, zIndex: 0 }}
    />
  );
};

export default DotSphere;
