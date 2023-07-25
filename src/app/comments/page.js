import styles from "./page.module.css";

export default function Comments() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h2>Comments</h2>
      </div>
    </div>
  );
}
