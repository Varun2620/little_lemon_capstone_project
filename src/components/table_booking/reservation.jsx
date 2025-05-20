import React, { useEffect } from 'react'
import {Formik, Form, Field} from 'formik'
import { useNavigate, useLocation} from 'react-router-dom'
import { fetchAPI } from '../../utils/api'
import * as Yup from 'yup'
import './reservation.css'

function reservation() {
  const navigate = useNavigate() 
  const location = useLocation()

  const initialData = location.state || {
            date: '',
            time: '',
            guests: 1,
            occasion: ''
            }

  const [availableSlots, setAvailableSlots] = React.useState([])
  const [slotDate, setSlotDate] = React.useState(initialData.date || '')

  useEffect(()=>{
    if(slotDate && fetchAPI){
        const dateObj = new Date(slotDate)
        const timeSlots = fetchAPI(dateObj)

        setAvailableSlots(timeSlots)
    }else{
      setAvailableSlots([])
    }
    console.log("Available slots for", slotDate, window.fetchAPI?.(new Date(slotDate)))
  },[slotDate])


  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const oneYearFromNow = new Date()
  oneYearFromNow.setFullYear(today.getFullYear() + 1)

  function validTime(value){
    if(!value){
      return false
    }

    const now = new Date()
    const [hours, minutes] = value.split(':').map(Number)

    let timeSelected = new Date()
    timeSelected.setHours(hours, minutes, 0, 0)

    if(timeSelected <= now){
      timeSelected.setDate(timeSelected.getDate() + 1)
    }

    return ( timeSelected > now ? true : false )
  }
      
  const validationSchemas = 
          Yup.object().shape({
                date: Yup.date()
                      .transform((originalValue) => (originalValue === '' ? null : new Date(originalValue)))
                      .min(today, 'Reservation Cannot Be In The Past')
                      .max(oneYearFromNow, 'Reservation Can Only Be Made One Year From Now')
                      .required('Date is Required For Table Reservation'),
      
                time: Yup.string()
                      .required('Give The Time You Want To Check In To The Restaurant')
                      .test('is-future-time','Time Must Be Later Than Current Time', (value)=> {
                        return validTime(value)
                      }),
      
                guests: Yup.number()
                        .required('Kindly Select The Number Of Guests')
                        .min(1, 'Number of guests must be at least 1')
                        .max(10, 'Number of guests cannot exceed 10'),
      
                occasion: Yup.string()
                        .notOneOf([''], 'Kindly Select The Occasion')
                        .required('Kindly Select The Occasion')
          });

  return (
    <main className='reservationContainer'>
      <section className='formContainer'>
        <article className='reservationForm'>
          <Formik
            initialValues={initialData}
            validationSchema={validationSchemas}
            onSubmit={  async (values) => {
                        await new Promise((response) => setTimeout(response, 1000))
                        console.log(JSON.stringify(values, null, 2))
                        navigate('/confirmBooking', {state: values}) 
                      }}
          >
            {({errors, touched, isSubmitting, setFieldValue})=>(
              <Form className='formContent'>
                <div className="formData">
                  <label htmlFor='date'>Select Date:</label>
                  <Field 
                      type='date' 
                      name='date'
                      onChange={(e) => {
                        setFieldValue('date', e.target.value)
                        setSlotDate(e.target.value)
                      }}
                  />
                </div>
                {errors.date && touched.date && <p className='errorMsg'>{errors.date}</p> }

                <div className="formData">
                  <label htmlFor='time'>Time of event:</label>
                  <Field as='select' name='time'>
                    <option value='' label='Select Time' />
                    {
                      availableSlots.length > 0 ? (
                        availableSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))
                      ) : <option>No Available Slots</option>
                    }
                    
                  </Field>
                </div>
                {errors.time && touched.time && <p className='errorMsg'>{errors.time}</p>}
                
                <div className="formData">
                  <label htmlFor='guests'>Number of Guests:</label>
                  <Field type='number' name='guests' placeholder='Select Number Of Guests' min='1' max='10' />
                </div>
                {errors.guests && touched.guests && <p className='errorMsg'>{errors.guests}</p>}
                
                <div className="formData">
                  <label htmlFor='occasion'>Occasion:</label>
                  <Field as='select' name='occasion'>
                    <option value='' label='Select Occasion' />
                    <option value='Birthday' label='Birthday' />
                    <option value='Anniversary' label='Anniversary' />
                  </Field>
                </div>
                {errors.occasion && touched.occasion && <p className='errorMsg'>{errors.occasion}</p>}

                <button disabled={isSubmitting} className='formBtn'>{isSubmitting ? 'Submitting...' : 'Submit'}</button>
              </Form>
            )}
          </Formik>
        </article>
      </section>
    </main>
  )
}

export default reservation
