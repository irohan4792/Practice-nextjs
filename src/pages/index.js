import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.hunt}>
        <h1>Hunting Coder</h1>
        <p>Blog for coders by a coder</p> 
        <div className={styles.imgcont}>
        <Image alt='laptop img' src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={500} height={400}/>
        </div>
      </main>
    </>
  )
}
