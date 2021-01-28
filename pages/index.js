import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Film Cult</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <footer className={styles.footer}></footer>
    </div>
  );
}
