import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/standings.module.scss'
import Link from 'next/link';
import Layout from '../components/Layout';

export const getStaticProps = async () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ae54ef8c4msh36db11fd19d265dp115741jsn731299f42bf5',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
    };

    const res = await fetch('https://footapi7.p.rapidapi.com/api/tournament/17/season/41886/standings/total', options);
    const data = await res.json();
    return {
        props: {
            table: data
        }
    }
}

export default function Standings({ table }) {

  return (
    <div>
        <Head>
            <title>Standings | Premier League</title>
            <meta name="description" content="Premier League Live Scores, Results and Standings" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        
        <Layout>
            <div className={styles.standingsContainer}>
                <div className={styles.standingsTop}>
                    <div className={styles.tableCol}></div>
                    <div className={styles.teamName}><p>Team</p></div>
                    <div className={styles.tableCol}><p>P</p></div>
                    <div className={styles.tableCol}><p>W</p></div>
                    <div className={styles.tableCol}><p>D</p></div>
                    <div className={styles.tableCol}><p>L</p></div>
                    <div className={styles.points}><p>Points</p></div>
                </div>
                {table.standings[0].rows.map(standing => (
                    <div key={standing.id} className={styles.standing}>
                        <div className={styles.tableCol}><p>{standing.position}</p></div>
                        <div className={styles.teamName}><p>{standing.team.name}</p></div>
                        <div className={styles.tableCol}><p>{standing.matches}</p></div>
                        <div className={styles.tableCol}><p>{standing.wins}</p></div>
                        <div className={styles.tableCol}><p>{standing.draws}</p></div>
                        <div className={styles.tableCol}><p>{standing.losses}</p></div>
                        <div className={styles.points}><p>{standing.points}</p></div>
                    </div>
                ))}
            </div>
        </Layout>

    </div>
  )
}
