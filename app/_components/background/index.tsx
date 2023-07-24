'use client';

import React from 'react';

export interface BackgroundGraphProps {
  isAnimated: boolean;
}

export const BackgroundGraph = ({ isAnimated }: BackgroundGraphProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    let animationFrameId: number;
    let increment = 0;
    while (!canvasRef.current);
    if (!canvasRef.current) {
      return;
    }
    // Resize
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) {
      return;
    }

    const render = () => {
      draw(ctx, increment);
      if (isAnimated) {
        increment += 0.5;
      }
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width="100vw"
      height="100vh"
      style={{
        // TODO Get rid of inline styles
        position: 'absolute',
        top: 0,
        backgroundColor: '#f7f1fe',
      }}
    />
  );
};

const draw = (ctx: CanvasRenderingContext2D, frame: number) => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  ctx.clearRect(0, 0, w, h);
  ctx.fill();

  ctx.strokeStyle = 'rgba(158, 63, 253, 0.06)';
  // Horizontal Graph Lines
  for (let x = 0; x < w; x += 75) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = 0; y < h; y += 75) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  for (let x = 0; x < w; x++) {
    ctx.strokeStyle = 'rgba(158, 63, 253, 0.4)';
    // ctx.shadowColor = 'rgba(0,0,0,0)';
    // ctx.shadowBlur = 0;
    const y1 =
      mapRange(x, 0, w, h, Math.round(0.33 * h)) -
      Math.sin((x + frame / 2) * 0.01) * 75;
    const y2 =
      mapRange(x, 0, w, h, Math.round(0.33 * h)) -
      Math.cos((x - frame) * 0.02) * 75 +
      50;
    // First Curve
    ctx.beginPath();
    ctx.moveTo(x, h);
    ctx.lineTo(x, y1);
    ctx.stroke();
    // Second Curve
    ctx.beginPath();
    ctx.moveTo(x, h);
    ctx.lineTo(x, y2);
    ctx.stroke();
    // Draw Lines
    ctx.fillStyle = 'white';
    // ctx.shadowColor = 'white';
    // ctx.shadowBlur = 15;
    ctx.rect(x, y2, 1, 1);
    ctx.rect(x, y1, 1, 1);
    ctx.fill();
  }
};

// From https://stackoverflow.com/a/48803093/13223534
const mapRange = (
  value: number,
  a: number,
  b: number,
  c: number,
  d: number,
) => {
  // first map value from (a..b) to (0..1)
  value = (value - a) / (b - a);
  // then map it from (0..1) to (c..d) and return it
  return c + value * (d - c);
};
