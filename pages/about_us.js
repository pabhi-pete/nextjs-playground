import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function AboutUs() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
      </Head>

      <h1 className={styles.title}>About Us</h1>
    </div>
  )
}
