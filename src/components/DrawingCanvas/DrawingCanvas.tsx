"use client";

import { useEffect, useRef, useState } from "react";
import ExportPDF from "../ExportPDF/ExportPDF";
import BackButton from "../BackButton/BackButton";
import IconImage from "../IconImage/IconImage";
import styles from "./DrawingCanvas.module.scss";

export default function DrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const currentCanvas = canvasRef.current;

    if (!currentCanvas) return;

    setCanvas(currentCanvas);

    const ctx = currentCanvas.getContext("2d");

    if (!ctx) return;

    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#6B6B6B";

    let drawing = false;

    function getPosition(event: MouseEvent | TouchEvent) {
      const rect = currentCanvas.getBoundingClientRect();

      if ("touches" in event) {
        return {
          x: event.touches[0].clientX - rect.left,

          y: event.touches[0].clientY - rect.top,
        };
      }

      return {
        x: event.clientX - rect.left,

        y: event.clientY - rect.top,
      };
    }

    function startDrawing(event: MouseEvent | TouchEvent) {
      drawing = true;

      const position = getPosition(event);

      ctx.beginPath();

      ctx.moveTo(position.x, position.y);
    }

    function draw(event: MouseEvent | TouchEvent) {
      if (!drawing) return;

      const position = getPosition(event);

      ctx.lineTo(position.x, position.y);

      ctx.stroke();
    }

    function stopDrawing() {
      drawing = false;

      ctx.closePath();
    }

    currentCanvas.addEventListener("mousedown", startDrawing);

    currentCanvas.addEventListener("mousemove", draw);

    currentCanvas.addEventListener("mouseup", stopDrawing);

    currentCanvas.addEventListener("mouseleave", stopDrawing);

    currentCanvas.addEventListener("touchstart", startDrawing);

    currentCanvas.addEventListener("touchmove", draw);

    currentCanvas.addEventListener("touchend", stopDrawing);

    return () => {
      currentCanvas.removeEventListener("mousedown", startDrawing);

      currentCanvas.removeEventListener("mousemove", draw);

      currentCanvas.removeEventListener("mouseup", stopDrawing);

      currentCanvas.removeEventListener("mouseleave", stopDrawing);

      currentCanvas.removeEventListener("touchstart", startDrawing);

      currentCanvas.removeEventListener("touchmove", draw);

      currentCanvas.removeEventListener("touchend", stopDrawing);
    };
  }, []);

  function clearCanvas() {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className={styles.wrapper}>
      <canvas
        ref={canvasRef}
        width={900}
        height={600}
        className={styles.canvas}
      />

      <section className={styles.actions}>
        <BackButton href="/calm" />

        <ExportPDF
          canvas={canvas}
          title="Safe Space - Drawing"
          filename="safe-space-drawing.pdf"
        />

        <button onClick={clearCanvas} className={styles.button}>
          <IconImage src="/images/icons/clear.png" alt="erase the drawing" size={30} name="Erase" />
        </button>
      </section>
    </div>
  );
}
