import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

function CreditCard() {
    const navigate = useNavigate()

    const schema = Yup.object().shape({
        holderName: Yup.string()
                    .required('*Enter the name of the card holder')
                    .min(3, '*The card holder name should atleast be 3 characters')
                    .max(20, '*The card holder name should not exceed 20 characters'),
        cardNumber: Yup.string()
                    .required('*Card number is required')
                    .matches(/^\d{8,19}$/, '*The card number should be between 8 and 13 digits'),
        cvvNumber: Yup.string()
                   .required('*cvv number is required')
                   .matches(/^\d{3,4}$/, '*CVV number should be between 3 and 4 digits'),
        expiryDate: Yup.string()
                    .required('*Expiry date for the card is required')
                    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, '*Expiry date shold be in the format MM/YY')
                    .test('expiry-date-valid', 'Card has expired', (value) => {
                            if (!value) return false;

                            const [month, year] = value.split('/')

                            const currentDate = new Date()

                            const inputYear = parseInt(`20${year}`, 10)
                            const inputMonth = parseInt(month, 10)

                            if(inputYear < currentDate.getFullYear() || (inputYear === currentDate.getFullYear() && inputMonth < currentDate.getMonth())){
                                return false
                            }
                            return true
                    })
    })

    // function handleClick(){

    // }

  return (
    <section className='cardContainer'>
        <article className='cardDetails'>
            <Formik initialValues={{
                holderName: '',
                cardNumber: '',
                cvvNumber: '',
                expiryDate: ''
            }} 
            validationSchema={schema}
            onSubmit={async (values)=>{
                await new Promise((res) => setTimeout(res, 1000))
                console.log(JSON.stringify(values))
                navigate('/confirmation')
            }}
            
            >
                {({errors, touched, isSubmitting})=>(
                    <Form className='cardForm'>
                        <div className="cardData">
                            <label htmlFor='holderName' className='userLabel'>Name of the holder:</label>
                            <Field type='text' name='holderName' className='cardText' placeholder='Enter the name of the holder' />
                        </div>
                        {
                            errors.holderName &&
                            touched.holderName &&
                            <p className='errorMsg'>{errors.holderName}</p>
                        }
                        
                        <div className="cardData">
                            <label htmlFor='cardNumber' className='userLabel'>Number of the card:</label>
                            <Field type='text' name='cardNumber' className='cardText' placeholder='Enter the card number' />
                        </div>
                        {
                            errors.cardNumber &&
                            touched.cardNumber &&
                            <p className='errorMsg'>{errors.cardNumber}</p>
                        }
                        
                        <div className="cardData">
                            <label htmlFor='cvvNumber' className='userLabel'>CVV:</label>
                            <Field type='password' name='cvvNumber' className='cvvInput' placeholder='CVV' />
                        </div>
                        {
                            errors.cvvNumber &&
                            touched.cvvNumber &&
                            <p className='errorMsg'>{errors.cvvNumber}</p>
                        }
                        
                        <div className="cardData">
                            <label htmlFor='expiryDate' className='userLabel'>Expiry Date:</label>
                            <Field type='text' name='expiryDate' placeholder='MM/YY' className='dateInput' maxLength={5} />
                        </div>
                        {
                            errors.expiryDate &&
                            touched.expiryDate &&
                            <p className='errorMsg'>{errors.expiryDate}</p>
                        }
                        
                        <button type='submit' className='cardBtn' disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </article>
    </section>
  )
}

export default CreditCard
