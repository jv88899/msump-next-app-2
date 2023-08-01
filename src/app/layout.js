import NavigationMenu from "@/components/NavigationMenu/NavigationMenu";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Community from "@/components/Community/Community";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Still Untitled Music Project",
  description: "Join us as we search for the best albums ever created",
};

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className={styles.wrapper}>
//           <div className={styles["inner-wrapper"]}>
//             <div style={{ width: "30%", backgroundColor: "blue" }}>
//               <NavigationMenu />
//             </div>
//             <div style={{ width: "40%" }}>{children}</div>
//             <div
//               style={{
//                 width: "30%",
//                 backgroundColor: "green",
//               }}
//             >
//               <Community />
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=""></div>
      </body>
    </html>
  );
}
