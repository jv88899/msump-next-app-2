import styles from "./page.module.css";

export default function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h2>Dashboard</h2>
      </div>
    </div>
  );
}
