import styles from '@/styles/login.module.css'
import { Formik} from 'formik'
import Image from 'next/image'
import { userLogin} from '@/pages/api/auth'
import { useRouter } from 'next/router'


const LoginForm = () => {
  const router = useRouter();
return (
<>
<div>
<Formik
  initialValues={{ emailorUsername:'',password:'', }}
  onSubmit={(values, actions) => {
    setTimeout(() => {
      userLogin(values)
      router.push('/home');
      actions.setSubmitting(false);
    }, 1000);
  }}
>
  {props => (
    <form onSubmit={props.handleSubmit} className={styles.form}>
        <div className={styles.form_upper}>
        <div className={styles.form_upper_image}>
            <Image src={"/calendar.png"} height="40" width="40" alt={'Logo'} />
        </div>
        </div>
        <div className={styles.form_title}>
            <h1>Login</h1>
        </div>
     <label htmlFor="emailorUsername"></label>        
    <input
        type="email/text"
        required
        placeholder='Email or Username'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.emailorUsername}
        name="emailorUsername"
      /> 
    {props.errors.emailorUsername && <div id="feedback">{props.errors.emailorUsername}</div>}
 
    <label htmlFor="password"></label>
    <input
     required
     placeholder='Password'
     type="password"
     onChange={props.handleChange}
     onBlur={props.handleBlur}
     value={props.values.password}
     name="password"
    /> 
    {props.errors.password && <div id="feedback">{props.errors.password}</div>}
    <button type="submit">Submit</button>
    <div className={styles.forgotPass}><h4>Forgot Password?</h4></div>
    </form>
    
  )}
</Formik>
</div>
</>
    )
}

export default LoginForm;
