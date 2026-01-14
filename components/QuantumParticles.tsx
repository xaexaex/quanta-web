"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    targetAlpha: number;
}

const QuantumParticles = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const grainRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Dynamic State for "Quantum Field" simulation
    const [entanglementRate, setEntanglementRate] = useState(99.98);
    const [isStable, setIsStable] = useState(true);

    // Function to fluctuate random stats
    const fluctuateStats = () => {
        const change = (Math.random() - 0.5) * 0.05;
        setEntanglementRate(prev => {
            let start = prev + change;
            if (start > 99.99) start = 99.99;
            if (start < 98.00) start = 98.00;
            return parseFloat(start.toFixed(2));
        });

        // Small chance to briefly flicker unstable
        if (Math.random() > 0.95) {
            setIsStable(false);
            setTimeout(() => setIsStable(true), 200);
        }
    };

    useEffect(() => {
        // Generate grain noise
        if (grainRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = 200;
            canvas.height = 200;
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.fillStyle = 'rgba(0,0,0,0)';
                ctx.fillRect(0, 0, 200, 200);
                for (let i = 0; i < 4000; i++) {
                    const x = Math.random() * 200;
                    const y = Math.random() * 210;
                    ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.15})`; // Subtle black noise
                    ctx.fillRect(x, y, 1, 1);
                }
                grainRef.current.style.backgroundImage = `url(${canvas.toDataURL()})`;
            }
        }
    }, []);

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setDimensions({
                    width: entry.contentRect.width,
                    height: entry.contentRect.height
                });
            }
        });

        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let particles: Particle[] = [];
        let animationFrameId: number;
        // Set canvas size specifically
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        let width = dimensions.width;
        let height = dimensions.height;

        const initParticles = () => {
            particles = [];
            const density = 6000; // Lower is more dense
            const particleCount = Math.min(Math.floor((width * height) / density), 100);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 0.5,
                    alpha: Math.random(),
                    targetAlpha: Math.random()
                });
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections
            ctx.lineWidth = 1;

            for (let i = 0; i < particles.length; i++) {
                const p1 = particles[i];

                // Blink effect
                if (Math.abs(p1.alpha - p1.targetAlpha) < 0.01) {
                    p1.targetAlpha = Math.random();
                } else {
                    p1.alpha += (p1.targetAlpha - p1.alpha) * 0.02;
                }

                // Move particles
                p1.x += p1.vx;
                p1.y += p1.vy;

                // Bounce off edges
                if (p1.x < 0 || p1.x > width) p1.vx *= -1;
                if (p1.y < 0 || p1.y > height) p1.vy *= -1;

                // Mouse interaction (repel slightly if too close, attract if medium distance)
                const dx = mouseRef.current.x - p1.x;
                const dy = mouseRef.current.y - p1.y;
                const distToMouse = Math.sqrt(dx * dx + dy * dy);

                if (distToMouse < 250) {
                    // Gentle attraction
                    p1.x += dx * 0.01;
                    p1.y += dy * 0.01;
                }

                // Draw particle
                ctx.fillStyle = `rgba(0, 229, 153, ${p1.alpha})`;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect to nearby particles
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dist = Math.sqrt(
                        Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
                    );

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 229, 153, ${0.15 * (1 - dist / 120)})`;
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            fluctuateStats(); // Trigger change on movement
        };

        const handleClick = () => {
            fluctuateStats();
            // Emit particles from mouse position
            for (let k = 0; k < 8; k++) {
                particles.push({
                    x: mouseRef.current.x,
                    y: mouseRef.current.y,
                    vx: (Math.random() - 0.5) * 3,
                    vy: (Math.random() - 0.5) * 3,
                    size: Math.random() * 2 + 1,
                    alpha: 1,
                    targetAlpha: 0
                });
            }
            // Cleanup extra particles if too many
            if (particles.length > 200) {
                particles.splice(0, particles.length - 200);
            }
        };

        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mousedown", handleClick);

        initParticles();
        draw();

        return () => {
            canvas.removeEventListener("mousemove", handleMouseMove);
            canvas.removeEventListener("mousedown", handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [dimensions]);

    return (
        <div ref={containerRef} className="relative w-full h-full group">

            {/* Header Bar - Floating freely now */}
            <div className="absolute top-4 left-0 right-0 z-30 flex items-center justify-between px-4 opacity-70 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${isStable ? 'bg-[#00E599] shadow-[0_0_10px_#00E599]' : 'bg-red-500 shadow-[0_0_10px_red]'} animate-pulse`}></div>
                    <span className="text-[10px] font-mono font-semibold tracking-widest text-gray-400 uppercase">Quantum Field</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#FF5F57] shadow-sm"></div>
                    <div className="w-1 h-1 rounded-full bg-[#FEBC2E] shadow-sm"></div>
                    <div className="w-1 h-1 rounded-full bg-[#28C840] shadow-sm"></div>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full z-10 cursor-crosshair"
            />
            {/* Grain Overlay - Lighter/Subtle */}
            <div ref={grainRef} className="absolute inset-0 w-full h-full z-20 opacity-10 mix-blend-multiply pointer-events-none"></div>

            {/* Footer Overlay Details - Floating */}
            <div className="absolute bottom-4 left-0 right-0 p-4 z-20 w-full flex justify-between items-end pointer-events-none">
                <div className="flex flex-col gap-1">
                    <div className="text-[9px] font-mono text-gray-400">ENTANGLEMENT RATE</div>
                    <div className="text-xl font-mono text-gray-900 font-bold tracking-tighter transition-all duration-100">{entanglementRate.toFixed(2)}%</div>
                </div>
                <div className={`w-28 h-9 rounded border border-gray-200/50 flex items-center justify-center bg-white/40 backdrop-blur-sm transition-colors duration-300 ${isStable ? '' : 'bg-red-500/10 border-red-500/30'}`}>
                    <span className={`text-[10px] font-mono font-bold animate-pulse ${isStable ? 'text-[#00E599]' : 'text-red-500'}`}>{isStable ? 'STABLE' : 'FLUX'}</span>
                </div>
            </div>
        </div>
    );
};

export default QuantumParticles;
