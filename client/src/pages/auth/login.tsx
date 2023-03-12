import type { NextPage } from 'next'
import LoginForm from '@/components/Auth/loginform'
import styles from '@/styles/Home.module.css'
import Header from '../../components/Header/header'


const login: NextPage = () => {
    return (
        <>
         <Header />
            <main className={styles.main}>
                <LoginForm/>
            </main>
            
    </>
    )
}

export default login;