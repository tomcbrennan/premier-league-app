import Link from 'next/link'
import React from 'react'
import styles from '../styles/navigation.module.scss'
import { useRouter } from "next/router";

export default function Navigation() {
    
    const router = useRouter();
    const currentRoute = router.pathname;

  return (
    <div className={styles.navigationWrapper}>
        <Link href="/results">
            <a rel="noopener noreferrer" className={currentRoute === "/results" ? "active" : "non-active"}>Latest Results</a>
        </Link>
        <Link href="/standings">
            <a rel="noopener noreferrer" className={currentRoute === "/standings" ? "active" : "non-active"}>Standings</a>
        </Link>
    </div>
  )
}
