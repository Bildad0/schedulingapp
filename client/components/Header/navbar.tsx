import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()

  const handleSignupClick = (e:any) => {
    e.preventDefault()
    router.push('/auth/signup')
  }

  const handleLoginClick = (e:any) => {
    e.preventDefault()
    router.push('/auth/login')
  }
    return (
        <>
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
              <li className={styles.signup} onClick={handleSignupClick}> SIGN UP</li>
              <li className={styles.login} onClick={handleLoginClick}>LOGIN</li>
            </ul>
          </div>
            </nav>
        </>)
}