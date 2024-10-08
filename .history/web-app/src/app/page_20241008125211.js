import styles from "./page.module.css";
import Link from 'next/link'

import {APIProvider, Map} from '@vis.gl/react-google-maps';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <font
        style={{
          fontSize:50,
        }}
        >
          Welcome to my app!
        </font>
        <Link href="/lesson-3">Lesson 3</Link>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}