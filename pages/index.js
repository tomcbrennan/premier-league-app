import Head from 'next/head'
import Image from 'next/image'
import globalStyles from '../styles/utils.module.scss'
import styles from '../styles/home.module.scss'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Premier League</title>
        <meta name="description" content="Premier League Live Scores, Results and Standings" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <main>
        <div className={styles.homeBg}>
          <div className={styles.homeContainer}>
            <Image priority src="/epl-logo.png" alt="Premier League" width={350} height={131} />
            <h1 className={styles.title}>
              Experience the world's most exciting Football league.
            </h1>
            <Link href="/results">
              <a className={globalStyles.btn} rel="noopener noreferrer">Enter</a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
