
import { useEffect, useRef } from "react";

export const RadarChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Data
    const skills = ["Python", "SQL", "Communication", "Teamwork", "Problem-Solving"];
    const studentData = [90, 75, 70, 65, 85];
    const jobData = [95, 80, 75, 70, 90];
    const maxValue = 100;

    // Draw grid
    const levels = 5;
    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;

    for (let i = 1; i <= levels; i++) {
      const r = (radius * i) / levels;
      ctx.beginPath();
      for (let j = 0; j < skills.length; j++) {
        const angle = (j * 2 * Math.PI) / skills.length - Math.PI / 2;
        const x = centerX + r * Math.cos(angle);
        const y = centerY + r * Math.sin(angle);
        if (j === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.stroke();
    }

    // Draw axes
    ctx.strokeStyle = "#cbd5e1";
    for (let i = 0; i < skills.length; i++) {
      const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Draw skill labels
    ctx.fillStyle = "#475569";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    
    for (let i = 0; i < skills.length; i++) {
      const angle = (i * 2 * Math.PI) / skills.length - Math.PI / 2;
      const x = centerX + (radius + 20) * Math.cos(angle);
      const y = centerY + (radius + 20) * Math.sin(angle);
      
      ctx.fillText(skills[i], x, y);
    }

    // Draw job requirements (background)
    ctx.fillStyle = "rgba(239, 68, 68, 0.1)";
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let i = 0; i < jobData.length; i++) {
      const angle = (i * 2 * Math.PI) / jobData.length - Math.PI / 2;
      const value = (jobData[i] / maxValue) * radius;
      const x = centerX + value * Math.cos(angle);
      const y = centerY + value * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw student data (foreground)
    ctx.fillStyle = "rgba(37, 99, 235, 0.2)";
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for (let i = 0; i < studentData.length; i++) {
      const angle = (i * 2 * Math.PI) / studentData.length - Math.PI / 2;
      const value = (studentData[i] / maxValue) * radius;
      const x = centerX + value * Math.cos(angle);
      const y = centerY + value * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw data points
    for (let i = 0; i < studentData.length; i++) {
      const angle = (i * 2 * Math.PI) / studentData.length - Math.PI / 2;
      const value = (studentData[i] / maxValue) * radius;
      const x = centerX + value * Math.cos(angle);
      const y = centerY + value * Math.sin(angle);
      
      ctx.fillStyle = "#2563eb";
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    }

  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="w-full max-w-sm mx-auto"
      />
      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Your Skills</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span>Job Requirements</span>
        </div>
      </div>
    </div>
  );
};
