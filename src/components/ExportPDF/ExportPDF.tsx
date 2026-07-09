"use client";

import jsPDF from "jspdf";
import IconImage from "../IconImage/IconImage";
import styles from "./ExportPDF.module.scss";

type ExportPDFProps = {
  text?: string;
  canvas?: HTMLCanvasElement | null;
  title?: string;
  filename?: string;
};

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
        src="/images/icons/export_pdf.png"
        alt="Export PDF"
        name="Export PDF"
        size={24}
      />
    </button>
  );
}
