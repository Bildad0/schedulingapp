import styles from '@/styles/signup.module.css'
import { Formik, validateYupSchema } from 'formik'
import Image from 'next/image'
import * as Yup from 'formik-yup'
import { userSignup } from '@/pages/api/auth'



const LoginForm = () => {
    //      //TODO: Make API function that takes values and submit to the backend
    //        //TODO: check on formik on submit function



return (
<>
<div>
<Formik
  initialValues={{ emailorUsername:'',password:'', }}
  onSubmit={(values, actions) => {
    setTimeout(() => {
      userSignup(JSON.stringify(values, null, 2));
      alert(JSON.stringify(values, null, 2));
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
     <label htmlFor="email"></label>        
    <input
        type="email"
        required
        placeholder='Email or Username'
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.emailorUsername}
        name="email"
      /> 
    {props.errors.emailorUsername && <div id="feedback">{props.errors.emailorUsername}</div>}
 
    <label htmlFor="password">Password:</label>
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
    </form>
  )}
</Formik>
</div>
</>
    )
}

export default LoginForm;
