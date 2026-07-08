"use client";

import jsPDF from "jspdf";
import IconImage from "../IconImage/IconImage";
import styles from "./ExportPDF.module.scss";

type ExportPDFProps = {
  text: string;
};

export default function ExportPDF({ text }: ExportPDFProps) {
  function createPDF() {
    const pdf = new jsPDF();

    pdf.setFontSize(16);

    pdf.text("Safe Space - Thoughts", 20, 20);

    pdf.setFontSize(12);

    const lines = pdf.splitTextToSize(text, 170);

    pdf.text(lines, 20, 40);

    pdf.save("safe-space-thoughts.pdf");
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
