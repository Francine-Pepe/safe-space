import styles from "./CalmButton.module.scss";

type CalmButtonProps = {
  children: React.ReactNode;
};

export default function CalmButton({ children }: CalmButtonProps) {
  return <button className={styles.button}>{children}</button>;
}
