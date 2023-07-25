import styles from "./page.module.css";

export default function MyAlbums() {
  return (
    <div className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <h2>My Albums</h2>
      </div>
    </div>
  );
}
