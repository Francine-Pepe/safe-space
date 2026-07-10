import Link from "next/link";
import IconImage from "../IconImage/IconImage";
import styles from "./BackButton.module.scss";
import type { BackButtonProps } from "@/types/types";
import { backButtonImage } from "@/data/data";

export default function BackButton({
  href,
  text = "Back",
  size = 30,
}: BackButtonProps) {
  return (
    <Link href={href} className={styles.back}>
      <IconImage
        src={backButtonImage.src}
        alt={text}
        size={size}
        name={text}
      />
    </Link>
  );
}
