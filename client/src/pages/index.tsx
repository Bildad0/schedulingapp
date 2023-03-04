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
              <p className={styles.catch_phrase}>SIMPLIFY YOUR SCHEDULING</p>
              <h1 className={styles.main_body_info_title}>Automate <br />Your Appointments</h1>
              <p className={styles.main_body_info_description}>
                If you diligently track time, you’re also much more aware of how you <br />
                spend the given hours in a day and set priorities. You can use project <br />
                time tracking tools such as this to make sure tracking time is intuitive,<br/>
                hassle-free, and actually useful.
              </p>
          </div>
          </div>
          <div className={styles.svg}> <Image src="./Tomorrow.svg" alt={'Calender svg'} width="90" height="90" /></div>
        </div>
      </main>
      <div className={styles.footer}></div>
    </>
  )
}
