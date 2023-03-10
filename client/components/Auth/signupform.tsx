import styles from '@/styles/signup.module.css'
import { Formik, } from 'formik'
import Image from 'next/image'
import { userSignup } from '@/pages/api/auth'



const SignUpForm = () => {
return (
<>
<div>
<Formik
  initialValues={{ email: '',username:'',timezone:'',password:'',confirmPassword:'', }}
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
            <h1>Sign Up</h1>
        </div>
     <label htmlFor="email">Email Address:</label>        
    <input
        type="email"
        required
        onChange={props.handleChange}
        onBlur={props.handleBlur}
        value={props.values.email}
        name="email"
      /> 
    {props.errors.email && <div id="feedback">{props.errors.email}</div>}
    <label htmlFor="username">Username:</label>
    <input
     required
     type="username"
     onChange={props.handleChange}
     onBlur={props.handleBlur}
     value={props.values.username}
     name="username"
     /> 
    {props.errors.username && <div id="feedback">{ props.errors.username}</div>}
    <label htmlFor="timezone">Timezone:</label>
    <input
     type="timezone"
     onChange={props.handleChange}
     onBlur={props.handleBlur}
     value={props.values.timezone}
     name="timezone"
    /> 
    {props.errors.timezone && <div id="feedback">{props.errors.timezone}</div>}
    <label htmlFor="password">Password:</label>
    <input
     required
     type="password"
     onChange={props.handleChange}
     onBlur={props.handleBlur}
     value={props.values.password}
     name="password"
    /> 
    {props.errors.password && <div id="feedback">{props.errors.password}</div>}

    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input
    required
     type="password"
     onChange={props.handleChange}
     onBlur={props.handleBlur}
     value={props.values.confirmPassword}
     name="confirmPassword"
    /> 
    {props.errors.confirmPassword && <div id="feedback">{props.errors.confirmPassword}</div>}
    <button type="submit">Submit</button>
    </form>
  )}
</Formik>
</div>
</>
    )
}

export default SignUpForm;
