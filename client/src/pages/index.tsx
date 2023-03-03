import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>My Scheduler</title>
        <meta name="description" content="A web app used to book appointments and schedule activities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <main className={styles.main}>
        <div className={styles.nav_bar}>
          <div className={styles.nav_bar_content}>
            <h1 className={styles.title}>My Scheduler</h1>
            <div className={styles.navigation}>
              <ul className={styles.navigation_list}>
                <li>Home</li>
                <li>Testimonials</li>
                <li>FAQs</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
          <div className={styles.auth}>
              <ul className={styles.auth_list}>
                <li className={styles.signup}>SIGN UP</li>
                <li className={styles.login}>LOGIN</li>
              </ul>
            </div>
        </div>
        
        <div className={styles.main_body}>
          <div className={styles.main_body_info}>
            <div className={styles.main_body_info_content}>
              <p className={styles.catch_phrase}>SIMPLIFY YOUR SCHEDULES</p>
              <h1 className={styles.main_body_info_title}>Welcome to My Scheduler</h1>
              <p className={styles.main_body_info_description}>
                A web app used to book appointments and schedule activities.
              </p>
          </div>
          </div>
          <div className={styles.svg}> <Image src="./Tomorrow.svg" alt={'Calender svg'} width="64" height="64" /></div>
       </div>
      </main>
    </>
  )
}
