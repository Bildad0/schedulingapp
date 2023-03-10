import type { NextPage } from 'next'
import styles from '@/styles/signup.module.css'
import LoginForm from '@/../components/Auth/loginform'
import { Head } from 'next/document'


const login: NextPage = () => {
    return (
        <>
             <Head>
            <title>My Scheduler || Sign Up</title>
            <meta name="description" content="A web app used to book appointments and schedule activities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="calendar.png" />
           </Head>

            <main className={styles.main}>
                <LoginForm/>
            </main>
            
    </>
    )
}

export default login;