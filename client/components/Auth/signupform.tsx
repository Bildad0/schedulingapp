import styles from '@/styles/signup.module.css'
import { useFormik } from 'formik'
import Image from 'next/image'



const SignUpForm =()=> {
    const validate = (values: any) => {
        const errors = {
            username:"",
            password:"",
            email:"",
            timezone:"",
            confirmPassword:""
        };
      
        if (!values.username) {
            errors.username = 'Required';
        } else if (values.username.length < 5) {
            errors.username = 'Must be 5 characters or more';
        }
      
        if (!values.timezone) {
            errors.timezone = 'Required';
        } else if (values.timezone.length < 1) {
            errors.timezone = 'Add avalid Time zone';
        }
        if (!values.password) {
            errors.password = 'Required';
        } else if (values.password.length < 6) {
            errors.password = 'Must be 6 characters or more';
        }
        if (!values.confirmPassword) {
            errors.confirmPassword =  'Required';
        } else if (values.password != values.confirmPassword) {
            errors.confirmPassword = 'Passwords are not the same';
        }
      
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    // const submitValues = (values: formik.values) => {
    //      //TODO: Make API function that takes values and submit to the backend
    //     console.log('Submitted');
    // }
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            timezone: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: (values)=>{
            console.log("submited")
        },
           
       
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
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
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
        />
     {formik.touched.email && formik.errors.email ? (<div className={styles.error}>{ formik.errors.email}</div>):null}
      <label htmlFor="username">Username:</label>
       <input
         id="username"
         name="username"
         type="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}        
         value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (<div className={styles.error}>{ formik.errors.username}</div>):null}
        <label htmlFor="timezone">Timezone:</label>
       <input
         id="timezone"
         name="timezone"
         type="timezone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} 
         value={formik.values.timezone}
                />
                 {formik.touched.timezone && formik.errors.timezone ? (<div className={styles.error}>{ formik.errors.timezone}</div>):null}
     <label htmlFor="password">Password:</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur} 
                />
                {formik.touched.password && formik.errors.password ? (<div className={styles.error}>{ formik.errors.password}</div>):null}
      <label htmlFor="confirmPassword">Confirm Password:</label>
       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmPassword}
         onBlur={formik.handleBlur} 
        />
       <button type="submit" value="submit">Register</button>
     </form>
    </>
    )
}

export default SignUpForm;