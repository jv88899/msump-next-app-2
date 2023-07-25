import Link from "next/link";
import {
  FaHome,
  FaRecordVinyl,
  FaItunesNote,
  FaComment,
  FaUserCircle,
} from "react-icons/fa";
import styles from "./navigationMenu.module.css";

export default function NavigationMenu() {
  return (
    <div className={styles["nav-wrapper"]}>
      <div>
        <Link href="/dashboard">
          <FaHome />
        </Link>
      </div>
      <div>
        <Link href="/discover">
          <FaRecordVinyl />
        </Link>
      </div>
      <div>
        <Link href="/my-albums">
          <FaItunesNote />
        </Link>
      </div>
      <div>
        <Link href="/comments">
          <FaComment />
        </Link>
      </div>
      <div>
        <Link href="/profile">
          <FaUserCircle />
        </Link>
      </div>
    </div>
  );
}
