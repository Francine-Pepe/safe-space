import Image from "next/image";
import styles from "./IconImage.module.scss";

type IconImageProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function IconImage({ src, alt, size = 48 }: IconImageProps) {
  return (
    <div
      className={styles.wrapper}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image src={src} alt={alt} fill className={styles.image} />
    </div>
  );
}
