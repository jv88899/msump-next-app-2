import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1 className={styles.headline}>
        <span>My</span>
        <span>Still</span>
        <span>Untitled</span>
        <span>Music</span>
        <span>Project</span>
      </h1>
      <Link className={styles.button} href="/dashboard">
        Join Us
      </Link>
    </div>
  );
}
