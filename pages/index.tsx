import Head from 'next/head'
import React from 'react';
import styles from '../styles/Home.module.css'
import List from './List';
import 'bootstrap/dist/css/bootstrap.css'

const Home = ({ data }: { data: {} }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Challenge App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} style={{ paddingBottom: '35px' }}>
          Challenge <a href="https://nextjs.org"> App!</a>
        </h1>
        <List data={data} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random/50`) //get api data
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default Home
