import React from 'react'
import star from '../../assets/favourites.png'
import human from '../../assets/human.png'
import man from '../../assets/man.png'
import profile from '../../assets/profile.png'
import woman from '../../assets/woman.png'
import './testimonial.css'

function testimonial() {
  return (
    <section className="testimonialContainer">
      <article className='testimonialContent'>
        <h1>Testimonials</h1>
        <article className="cardContent">
          <div className="testimonialCard">
            <span className='rating'>
              <img src={star}></img>
              <p>4.5 star</p>
            </span>
            <span className='profile'>
              <img src={human} alt='Profile picture'></img>
              <h3>Stussy</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
          <div className="testimonialCard">
            <span className='rating'>
              <img src={star}></img>
              <p>4 star</p>
            </span>
            <span className='profile'>
              <img src={profile} alt='Profile picture'></img>
              <h3>Stephan</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
          <div className="testimonialCard">
            <span className='rating'>
              <img src={star}></img>
              <p>3.5 star</p>
            </span>
            <span className='profile'>
              <img src={woman} alt='Profile picture'></img>
              <h3>Christa</h3>
            </span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aliquam maiores fuga.</p>
          </div>
          <div className="testimonialCard">
            <span className='rating'>
              <img src={star}></img>
              <p>3 star</p>
            </span>
            <span className='profile'>
              <img src={man} alt='Profile picture'></img>
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
