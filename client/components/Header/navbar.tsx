import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const router = useRouter()


  const handleLoginClick = () => {
    //router('/auth/login')
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
              <button className={styles.login} onClick={handleLoginClick}>LOGIN</button>
            </ul>
          </div>
            </nav>
        </>)
}