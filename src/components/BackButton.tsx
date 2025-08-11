import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function BackButton() {
    const height = 64;
    const width = 28;
    const gap = -10;
    const midY = height / 2;
    const triangleCount = 1;

    useGSAP(() => {
        gsap.from('.triangle', {
            autoAlpha: 0,
            duration: 2,
            stagger: .1,
            transformOrigin: '50% 50%'
        })
    })

    const padding = 1; // Add 1px padding to the left
  const totalWidth = triangleCount * (width + gap) - gap + padding;

  const triangles = Array.from({ length: triangleCount }).map((_, i) => {
    const offsetX = i * (width + gap) + padding;
    return (
      <polygon
        className="triangle"
        key={i}
        points={`
          ${offsetX + width},0 
          ${offsetX},${midY} 
          ${offsetX + width},${height}
        `}
        fill="transparent"
        stroke="gray"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    );
  });

  return (
    <svg
      width={totalWidth}
      height={height}
      viewBox={`0 0 ${totalWidth} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {triangles}
    </svg>
  );
}