import { useEffect, useRef } from "react";
import { MaskCircle } from "interfaces";
import { createCircle } from "./createCircle";

export const InpaintMask = () => {
  const maskRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = maskRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const circles: MaskCircle[] = [];
    const numberOfCircles = 5; // TODO extract to param

    for (let i = 0; i < numberOfCircles; i++) {
      const circle = createCircle(circles);
      circles.push(circle);
      context.beginPath();
      context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
      context.fillStyle = "black";
      context.fill();
      context.closePath();
    }

    console.log(circles); // Save the circles array for later use
  }, []);

  return <canvas ref={maskRef} width="1024" height="1024"></canvas>;
};
