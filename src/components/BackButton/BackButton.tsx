import Link from "next/link";
import IconImage from "../IconImage/IconImage";
import styles from "./BackButton.module.scss";

type BackButtonProps = {
  href: string;
  text?: string;
  size?: number;
};

export default function BackButton({
  href,
  text = "Back",
  size = 30,
}: BackButtonProps) {
  return (
    <Link href={href} className={styles.back}>
      <IconImage
        src="/images/icons/back.png"
        alt={text}
        size={size}
        name={text}
      />
    </Link>
  );
}
