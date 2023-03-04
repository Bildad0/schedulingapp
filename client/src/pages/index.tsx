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
              <h1 className={styles.main_body_info_title}>Automate <br />Your Appointments.</h1>
              <p className={styles.main_body_info_description}>
                If you diligently track time, you’re also much more aware of how you <br />
                spend the given hours in a day and set priorities. You can use project <br />
                time tracking tools such as this to make sure tracking time is intuitive,<br/>
                hassle-free, and actually useful.
              </p>
          </div>
          </div>
          <div className={styles.svg}> <Image src="/calendar.jpg" alt={'Calender svg'} width="500" height="500" className={styles.image }/></div>
        </div>
      </main>
      <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.about_app}>
            <h1>About App</h1>
            <p></p>
          </div>
          <div className={styles.about_developer}>
            <h1>Our Team</h1>
            <p>We are a team of software developers <br />
              dedicated to deliver quality Mobile and web applications <br />
              to our esteamed customers
            </p>
          </div>
          <div className={styles.testimonials}><h1>Usefull Links</h1>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
      <p className={styles.my_slogan}>Made in Africa</p>
        <p className={styles.copyright}>© 2023 The Rookies Co. All rights reserved.</p>
        </div>
    </>
  )
}
