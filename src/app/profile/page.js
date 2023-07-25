import styles from "./page.module.css";

export default function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h2>Profile</h2>
      </div>
    </div>
  );
}
