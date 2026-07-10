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
    // make a non-null local copy for use in closures to satisfy TypeScript
    const canvasEl = currentCanvas;
    setCanvas(canvasEl);
    const ctx = currentCanvas.getContext("2d");
    if (!ctx) return;
    const drawingContext = ctx;

    drawingContext.lineWidth = 4;
    drawingContext.lineCap = "round";
    drawingContext.lineJoin = "round";
    drawingContext.strokeStyle = "#6B6B6B";

    let drawing = false;

    function getPosition(event: MouseEvent | TouchEvent) {
      const rect = canvasEl.getBoundingClientRect();

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

      drawingContext.beginPath();

      drawingContext.moveTo(position.x, position.y);
    }

    function draw(event: MouseEvent | TouchEvent) {
      if (!drawing) return;

      const position = getPosition(event);

      drawingContext.lineTo(position.x, position.y);

      drawingContext.stroke();
    }

    function stopDrawing() {
      drawing = false;

      drawingContext.closePath();
    }

    canvasEl.addEventListener("mousedown", startDrawing);

    canvasEl.addEventListener("mousemove", draw);

    canvasEl.addEventListener("mouseup", stopDrawing);

    canvasEl.addEventListener("mouseleave", stopDrawing);

    canvasEl.addEventListener("touchstart", startDrawing);

    canvasEl.addEventListener("touchmove", draw);

    canvasEl.addEventListener("touchend", stopDrawing);

    return () => {
      canvasEl.removeEventListener("mousedown", startDrawing);

      canvasEl.removeEventListener("mousemove", draw);

      canvasEl.removeEventListener("mouseup", stopDrawing);

      canvasEl.removeEventListener("mouseleave", stopDrawing);

      canvasEl.removeEventListener("touchstart", startDrawing);

      canvasEl.removeEventListener("touchmove", draw);

      canvasEl.removeEventListener("touchend", stopDrawing);
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
          <IconImage
            src="/images/icons/clear.png"
            alt="erase the drawing"
            size={30}
            name="Erase"
          />
        </button>
      </section>
    </div>
  );
}
