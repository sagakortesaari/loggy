import Head from "next/head";
import Image from "next/image";
import styles from "@styles/index.module.css";
import profilePic from "@assets/me.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        Hi, i'm saga!
        <Image src={profilePic}/>
      </div>
    </div>
  );
}
