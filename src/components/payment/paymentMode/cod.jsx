import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import './paymentMode.css'

function cod() {
    const [success, setSuccess] = React.useState(false)
    const navigate = useNavigate()

    const schema = Yup.object().shape({
        name: Yup.string()
        .required('*Enter the name of the customer')
        .max(20,'*The name should not contain more than 20 characters'),

        address: Yup.string()
                .required('*Enter the address to deliver the order'),
        
        phoneNumber: Yup.string()
                    .matches(/^\d{10}$/, '*Phone number must be exactly 10 digits')
                    .required('*Enter the phone number of the customer')
    })

    function handleClick(){
        setSuccess(true)
    }

  return (
    <section className="codMain">
        <article className='codContainer'>
            <Formik initialValues={{
                    name: '',
                    address: '',
                    phoneNumber: ''
                }}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log("User details", values.name, values.address, values.phoneNumber)

                    // setSuccess(true)
                    console.log(success)
                    if(success){
                        navigate('/confirmation')
                    }
                }}  
            >
                {({errors, touched, isSubmitting})=>(
                    <Form className='customerDetails'>
                        <div className="cardData">
                            <label htmlFor='name' className='userLabel'>Name:</label>
                            <Field type='text' name='name' className='userText' placeholder='Name'/>
                        </div>
                        {
                            errors.name && 
                            touched.name && 
                            <p className='errorMsg'>{errors.name}</p>
                        }

                        <div className="cardData">
                            <label htmlFor='address' className='userLabel'>Address</label>
                            <Field type='textarea' name='address' className='userText' placeholder='Address' />
                        </div>
                        {
                            errors.address && 
                            touched.address && 
                            <p className='errorMsg'>{errors.address}</p>
                        }

                        <div className="cardData">
                            <label htmlFor='phoneNumber' className='userLabel'>Phone Number</label>
                            <Field type='tel' name='phoneNumber' className='userText' placeholder='Phone Number' />
                        </div>  
                        {
                            errors.phoneNumber && 
                            touched.phoneNumber && 
                            <p className='errorMsg'>{errors.phoneNumber}</p>
                        }
                        <button type='submit' className='codBtn' disabled={isSubmitting} onClick={handleClick} >Place Order</button>          
                    </Form>
                )}
            </Formik>
        </article>
    </section>
  )
}

export default cod
