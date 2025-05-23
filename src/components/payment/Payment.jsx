import React from 'react'
import {Formik, Form, Field} from 'formik'
import { useNavigate } from 'react-router-dom'
import './payment.css'

function Payment() {
    const [paymentMethod, setPaymentMethod] = React.useState('')
    const navigate = useNavigate()

    return (
        <main className='paymentMain'>
            <section className="paymentContainer">
                <article className='paymentForm'>
                    <Formik
                        initialValues={{
                            paymentMethod: ''
                        }}
                        onSubmit={(values) => {
                            console.log('Payment Method is: ',values.paymentMethod)
                            setPaymentMethod(values.paymentMethod)

                            if(values.paymentMethod === 'card'){
                                navigate('/card')
                            }else{
                                navigate('/cod')
                            }
                        }}
                    >
                        <Form className='paymentDetails'>
                            <h2>Select payment method</h2>
                            <div className="paymentCard">
                                <label className='paymentMode'>
                                    <Field type='radio' name='paymentMethod' value='card' className='paymentInput' />
                                    Credit / Debit Card
                                </label>
                            </div>
                            <div className="paymentCard">
                                <label className='paymentMode'>
                                    <Field type='radio' name='paymentMethod' value='cash' className='paymentInput' />
                                    Cash on Delivery
                                </label>
                            </div>
                            <button className='paymentBtn'>Submit</button>
                        </Form>
                    </Formik>
                </article>
            </section>
        </main>
    )
}

export default Payment
