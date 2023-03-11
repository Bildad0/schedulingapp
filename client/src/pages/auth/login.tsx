import type { NextPage } from 'next'
import LoginForm from '@/../components/Auth/loginform'
import styles from '@/styles/Home.module.css'


const login: NextPage = () => {
    return (
        <>
            <main className={styles.main}>
            <head>
            <title>My Scheduler || login</title>
            <meta name="description" content="A web app used to book appointments and schedule activities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="calendar.png" />
           </head>
                <LoginForm/>
            </main>
            
    </>
    )
}

export default login;