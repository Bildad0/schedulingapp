import style from '@/styles/login.module.css'
import styles from '@/styles/Home.module.css'
import {useFormik } from 'formik'
import Head from 'next/head'
import { useState } from 'react'

const SignUpForm =()=> {
    const [value, setValues] = useState({});
    
    const handleChange = (e:any) => {
        setValues(preValues => ({
            ...preValues,
            [e.target.name]: e.target.value
        }))
    }
    const validate = (values: any) => {
        const errors = {
            username: values.username,
            password: values.password,
            email: values.email,
            timezone: values.timemezone,
            confirmPassword: values.confirmPassword
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
            errors.confirmPassword = 'Required';
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
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            timezone: '',
            password: '',
            confirmPassword: '',
        },
        validate,
        onSubmit: (values) => {
            //TODO: Make API function that takes values and submit to the backend
            console.log(values);
        },
    });
    return (
        <>
         <Head>
            <title>My Scheduler || Sign Up</title>
            <meta name="description" content="A web app used to book appointments and schedule activities." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="calendar.png" />
           </Head>
           

        <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
        />
     {formik.touched.email && formik.errors.email ? (<div>{ formik.errors.email}</div>):null}
      <label htmlFor="username">Username</label>
       <input
         id="username"
         name="username"
         type="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}        
         value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (<div>{ formik.errors.username}</div>):null}
        <label htmlFor="timezone">Timezone</label>
       <input
         id="timezone"
         name="timezone"
         type="timezone"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} 
         value={formik.values.timezone}
                />
                 {formik.touched.timezone && formik.errors.timezone ? (<div>{ formik.errors.timezone}</div>):null}
     <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur} 
                />
                {formik.touched.password && formik.errors.password ? (<div>{ formik.errors.password}</div>):null}
      <label htmlFor="confirmPassword">Confirm Password</label>
       <input
         id="confirmPassword"
         name="confirmPassword"
         type="password"
         onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur} 
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (<div>{ formik.errors.confirmPassword}</div>):null}
       <button type="submit">Submit</button>
     </form>
    
    </>
    )
}

export default SignUpForm;