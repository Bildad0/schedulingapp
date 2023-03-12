import type { NextPage } from 'next' 
import SignUpForm from '@/components/Auth/signupform'
import styles from '@/styles/signup.module.css'
import Header from '../../components/Header/header'

const SignUp: NextPage = () => {
    return (
        <>
    <Header/>
            <main className={styles.main}>
                <SignUpForm />
            </main>
            
    </>
    )
}

export default SignUp;