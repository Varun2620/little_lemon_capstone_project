import React from 'react'
import {Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { isFormComplete } from '../../utils/formComplete'
import './login.css'

function login() {
  const [account, setAccount] = React.useState(true)
  const [message, setMessage] = React.useState('')
  const navigate = useNavigate()

  const namePattern = /^[A-Za-z](?=.*[\d\W])[A-Za-z\d\W]{2,}$/
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  
  const schema = Yup.object().shape({
    firstName: Yup.string()
              .required('Enter your First Name')
              .min(3, 'First Name should atleast be 3 characters long')
              .max(20, 'First name should not exceed 20 characters'),
    
    lastName: Yup.string()
              .min(3, 'Last Name should be 3 characters long')
              .max(20, 'Last Name should not exceed 20 characters'),

    userName: Yup.string()
              .required('Enter your User Name')
              .matches(namePattern, 'Username should start with a letter and should contain one digit or a special character'),
  
    email: Yup.string().email('Invalid Email address')
          .required('Enter your email address'),

    password: Yup.string()
              .required('Enter the password')
              .min(8, 'Password should at least be 8 characters long')
              .max(16, 'Passwords should not exceed 16 characters')
              .matches(passwordPattern, 'Password should have a uppercase letter, a lower case letter, a digit, a special character'),
    
    confirmPassword: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords Must Match')
              .required('Password is required'),

    gender: Yup.string().oneOf([''], 'Knidly Select the Gender')
            .required('Kindly Select Your Gender')
  }) 

  const accountSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email address')
            .required('Enter your email address'),

    password: Yup.string()
              .required('Enter the password')
              .min(8, 'Password should at least be 8 characters long')
              .max(16, 'Passwords should not exceed 16 characters')
              .matches(passwordPattern, 'Password should have a uppercase letter, a lower case letter, a digit, a special character')
  })

  function handleClick(){
    setAccount(false)
  }
  
  function handleForm(value){
    if(value){
      setMessage(' ')
      navigate('/')
    }else{
      setMessage('Kindly fill out all the fields!')
    }
  }

  return (
    <main className='loginContainer'>
      {account ? 
        <section className='accountLogin'>
          <Formik initialValues={
            {
              email: '',
              password: ''
            }}
            validationSchema={accountSchema}
            onSubmit={async (values) => {
              await new Promise((response) => setTimeout(response, 1000))
              console.log(JSON.stringify(values, null, 2))
            }}
            
          >
            {({values, errors, touched, isSubmitting}) => (

              <Form className='accountForm'>
                <div className="formEle">
                  <label htmlFor='email'>Email</label>
                  <Field className='formText' type='email' name='email' placeholder='email'  />
                  {errors.email && touched.email && <p className='errorMsg'>{errors.email}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='password'>Password</label>
                  <Field className='formText' type='password' name='password' placeholder='password' />  
                  {errors.password && touched.password && <p className='errorMsg'>{errors.password}</p>}
                </div>

                <button className='loginBtn' disabled={isSubmitting} onClick={()=> handleForm(isFormComplete(touched,errors, 2))}>Login</button>
                {message && <p className='errorMsg'>{message}</p>}

                <div className="noAccount">
                  <p>Don't have an account?</p>
                  <button className='loginBtn' onClick={handleClick}>Click Here</button>
                </div>
              </Form> 
            )}
          </Formik>
        </section>

        : 
  
        <section className='loginData'>
          <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                userName: '',
                email: '',
                password: '',
                confirmPassword: '',
                gender: ''
              }
            }
            onSubmit={  async (values) => {
                          await new Promise((response) => setTimeout(response, 1000))
                          console.log(JSON.stringify(values, null, 2))
            }} 
            validationSchema={schema}
          >
            {({errors, touched, isSubmitting})=> (
              <Form className='loginForm'>
                <div className="formEle">
                  <label htmlFor='firstName'>First Name:</label>
                  <Field className='formText' type='text' name='firstName' placeholder='First Name' />
                  {errors.firstName && touched.firstName && <p className='errorMsg'>{errors.firstName}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='lastName'>Last Name</label>
                  <Field className='formText' type='text' name='lastName' placeholder='Last Name' />
                  {errors.lastName && touched.lastName && <p className='errorMsg'>{errors.lastName}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='userName'>User Name</label>
                  <Field className='formText' type='text' name='userName' placeholder='User Name' />
                  {errors.userName && touched.userName && <p className='errorMsg'>{errors.userName}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='email'>Email</label>
                  <Field className='formText' type='email' name='email' placeholder='@email' />
                  {errors.email && touched.email && <p className='errorMsg'>{errors.email}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='password'>Password</label>
                  <Field className='formText' type='text' name='password' placeholder='password' />
                  {errors.password && touched.password && <p className='errorMsg'>{errors.password}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='confirmPassword'>Confirm Password</label>
                  <Field className='formText' type='text' name='confirmPassword' placeholder='Confirm Password' />
                  {errors.confirmPassword && touched.confirmPassword && <p className='errorMsg'>{errors.confirmPassword}</p>}
                </div>

                <div className="formEle">
                  <label htmlFor='gender'>Gender:</label>
                  <Field className='formText' as='select' name='gender'>
                    <option value='' label='Select Gender' />
                    <option value='Male' label='Male' />
                    <option value='Female' label='Female' />
                    <option value='Prefer Not Say' label='Prefer Not Say' />
                  </Field>
                  {errors.gender && touched.gender && <p className='errorMsg'>{errors.gender}</p>}
                </div>
                
                <button className='loginBtn' disabled={isSubmitting} onClick={() => handleForm(touched, errors, 7)}>Create Account</button>
                {message && <p className='errorMsg'>{message}</p>}
              </Form>
            )}
          </Formik>
        </section>
      }
    </main>
  )
}

export default login
