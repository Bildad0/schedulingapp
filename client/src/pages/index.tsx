import Header from '@/components/Header/header'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()

  const onSignupButtonClick = () => {
    router.push('/auth/signup');
  }
  const handleLoginClick = () => {
    router.push('/auth/login')
  }
  return (
    <>
      <Header/>      
      <nav className={styles.nav_bar}>
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
              <button className={styles.login} onClick={handleLoginClick}>LOGIN</button>
            </ul>
          </div>
            </nav>

      <main className={styles.main}>        
        <div className={styles.main_body}>
          <div className={styles.main_body_info}>
            <div className={styles.main_body_info_content}>
              <p className={styles.catch_phrase}>SIMPLIFY YOUR SCHEDULING</p>
              <h1 className={styles.main_body_info_title}>Automate <br />Your Appointments.</h1>
              <p className={styles.main_body_info_description}>
               <q>If you diligently track time, you’re also much more aware of how you spend <br />
                the given hours in a day and set priorities. You can use project time tracking  <br />
                tools such as My Scheduler to make sure tracking time is intuitive,hassle-free, and actually useful.</q> -Unknown.
              </p>
              <button className={styles.trial_button} onClick={onSignupButtonClick }><h1>Start Free Trial</h1></button>
          </div>
          </div>
          <div className={styles.svg}>
            <Image src="/pic1.jpeg" alt={'image'} width="1000" height="1000" className={styles.image} />
          </div>
        </div>
      </main>
      <div className={styles.footer} >
        <div className={styles.footer_container}>
          <div className={styles.about_app}>
            <Image src={'/Tomorrow.svg'} alt={'date'}width="500" height="500" className={styles.image }/>
          </div>
          <div className={styles.about_developer}>
            <h1>Our Team</h1>
            <p>We are a team of software developers dedicated to deliver quality <br />
              Mobile and web applications to our esteamed customers.
            </p>
            <div className={styles.our_location}>
              <h1>Location</h1>
              <p> We are located in <i>Nairobi, Kenya.</i> <br />
                You can reach us through email: <a href="mailto:bildadowuor@gmail.com"> Bildadowuor@gmail.com</a><br />
                Or Call <a href="tel:+2547-005-4820">0700524820.</a>
              </p>              
            </div>
          </div>
          <div className={styles.testimonials}><h1>Usefull Links</h1>
            <ul>
              <li><a href="https://www.buymeacoffee.com/OwBildad" target="_blank" rel="noopener noreferrer"> Buy Me Coffe <Image src={'/coffeecup.png'} alt={'Coffee'} height="25" width="20" /> </a></li>
              <li><a href="https://www.instagram.com/iambildad/">Instagram</a></li>
              <li><a href="https://twitter.com/Bildad0"> Twitter</a></li>
            </ul>
          </div>
        </div>
        <p><a href="">Get our Mobile APP</a></p>
      </div>
      <div className={styles.footer_bottom}>
      <p className={styles.my_slogan}>Made with <span> &hearts;</span> by  <a href="https://github.com/Bildad0" target="_blank" rel="noopener noreferrer"> Bildad</a></p>
        <p className={styles.copyright}>© 2023 The Rookies Co. All rights reserved.</p>
        </div>
    </>
  )
}
