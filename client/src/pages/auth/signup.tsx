import type { NextPage } from 'next'
import Header from '../../../components/Header/header' 
import SignUpForm from '@/../components/Auth/signupform'

const SignUp: NextPage = () => {
    return (
        <>
            <Header />
            <SignUpForm/>
    </>
    )
}

export default SignUp;