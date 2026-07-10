"use client";

import jsPDF from "jspdf";
import IconImage from "../IconImage/IconImage";
import styles from "./ExportPDF.module.scss";
import type { ExportPDFProps } from "@/types/types";
import { pdfContentButton } from "@/data/data";

export default function ExportPDF({
  text,
  canvas,
  title = "Safe Space",
  filename = "safe-space.pdf",
}: ExportPDFProps) {
  function createPDF() {
    const pdf = new jsPDF();

    pdf.setFontSize(16);

    pdf.text(title, 20, 20);

    // Export text (Notebook)
    if (text) {
      pdf.setFontSize(12);

      const lines = pdf.splitTextToSize(text, 170);

      pdf.text(lines, 20, 40);
    }

    // Export canvas (Drawing)
    if (canvas) {
      const image = canvas.toDataURL("image/png");

      pdf.addImage(image, "PNG", 20, 40, 170, 120);
    }

    pdf.save(filename);
  }

  return (
    <button onClick={createPDF} className={styles.buttons}>
      <IconImage
        src={pdfContentButton.src}
        alt={pdfContentButton.alt}
        name={pdfContentButton.name}
        size={pdfContentButton.size}
      />
    </button>
  );
}
