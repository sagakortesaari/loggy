import Head from "next/head";
import Image from "next/image";
import styles from "@styles/index.module.css";
import profilePic from "@assets/me.jpg";
import { useTheme } from "@context/ThemeContext";

export default function Home() {
  // Todo: Add global stylesheet and use e.g. fonts from that so I don't have to re-write these CSS classes.
  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headertext}>
            <p className={styles.indexheader}>
              hi, i’m <b>saga!</b> 👋🏻
            </p>
            <p className={styles.indexparagraph}>
              this website is intended to be somewhat of a digital
              notebook. i write about all sorts of stuff - but mostly about tech + engineering.
            </p>
          </div>
          <Image className={styles.headerimage} quality={100} width={300} height={300} src={profilePic} />
        </div>
      </div>
    </div>
  );
}
