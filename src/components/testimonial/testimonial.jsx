import React from 'react'
import img from '../../assets/react.svg'
import './testimonial.css'

function testimonial() {
  return (
    <section className="testimonialContainer">
      <article className='testimonialContent'>
        <h1>Testimonials</h1>
        <article className="cardContent">
          <div className="testimonialCard">
            <span className='rating'>
              <img src={img}></img>
              <p>3</p>
            </span>
            <span className='profile'>
              <img src={img} alt='Profile picture'></img>
              <h3>John Doe</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
          <div className="testimonialCard">
            <span className='rating'>
              <img src={img}></img>
              <p>3</p>
            </span>
            <span className='profile'>
              <img src={img} alt='Profile picture'></img>
              <h3>John Doe</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
          <div className="testimonialCard">
            <span className='rating'>
              <img src={img}></img>
              <p>3</p>
            </span>
            <span className='profile'>
              <img src={img} alt='Profile picture'></img>
              <h3>John Doe</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
          <div className="testimonialCard">
            <span className='rating'>
              <img src={img}></img>
              <p>3</p>
            </span>
            <span className='profile'>
              <img src={img} alt='Profile picture'></img>
              <h3>John Doe</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
        </article>
      </article>
    </section>
  )
}

export default testimonial
