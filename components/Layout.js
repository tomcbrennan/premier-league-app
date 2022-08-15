import globalStyles from '../styles/utils.module.scss'
import styles from '../styles/layout.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '../components/Navigation';


export default function Layout({children}) {
  return (
    <div className={styles.Layout}>
        <div className={styles.sidebar}>
            <Image priority src="/images/epl-icon-white.png" alt="Premier League" width={63} height={78} />
            <h1>Results</h1>
            <Navigation />
        </div>
        <div className={styles.mainContainer}>
            <div className={styles.loader}></div>
            {children}
        </div>
    </div>
  )
}
