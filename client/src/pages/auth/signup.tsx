import type { NextPage } from 'next' 
import SignUpForm from '@/../components/Auth/signupform'
import Head from 'next/head'
import styles from '@/styles/signup.module.css'

const SignUp: NextPage = () => {
    return (
        <>
              <Head>
            <title>My Scheduler || Sign Up</title>
            <meta name="description" content="A web app used to book appointments and schedule activities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="calendar.png" />
           </Head>

            <main className={styles.main}>
                <SignUpForm />
            </main>
            
    </>
    )
}

export default SignUp;