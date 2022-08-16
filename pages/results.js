import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/results.module.scss'
import layoutStyles from '../styles/layout.module.scss'
import Link from 'next/link';
import Layout from '../components/Layout';

// This gets called on every request
export const getServerSideProps = async () => {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2ae54ef8c4msh36db11fd19d265dp115741jsn731299f42bf5',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
    };

    

    // Fetch data from external API
    const res = await fetch('https://footapi7.p.rapidapi.com/api/tournament/17/season/41886/matches/last/0', options)
    const data = await res.json()

    
    // Pass data to the page via props
    return {
        props: {
            results: data
        }
    }
}

export default function Results({ results }) {

  return (
    <div>
        <Head>
            <title>Results | Premier League</title>
            <meta name="description" content="Premier League Live Scores, Results and Standings" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        
        <Layout>
            <div className={styles.resultsContainer}>
                {results.events.map(result => (
                    <div key={result.id} className={styles.result}>
                        <div className={styles.time}>
                            <p>{result.status.type}</p>
                        </div>
                        <div className={styles.teamsWrapper}>
                            <div className={styles.teamContainer}>
                                <h2>{result.homeScore.current}</h2>
                                <h3>{result.homeTeam.name}</h3>
                                <p>{result.homeTeam.id}</p>
                            </div>
                            <span>vs</span>
                            <div className={styles.teamContainer}>
                                <h2>{result.awayScore.current}</h2>
                                <h3>{result.awayTeam.name}</h3>
                                <p>{result.awayTeam.id}</p>
                            </div>
                        </div>
                        <div className={styles.round}>
                            <p>Matchday &nbsp; {result.roundInfo.round}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>

    </div>
  )
}
