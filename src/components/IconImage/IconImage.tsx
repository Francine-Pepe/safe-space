import Image from "next/image";
import styles from "./IconImage.module.scss";
import type { IconImageProps } from "@/types/types";

export default function IconImage({
  src,
  alt,
  size = 48,
  name,
}: IconImageProps) {
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          width: size,
          height: size,
        }}
      >
        <Image src={src} alt={alt} fill className={styles.image} />
      </div>

      {name && <span className={styles.name}>{name}</span>}
    </div>
  );
}
