import React from 'react'
import { useNavigate } from 'react-router-dom'
import chef1 from '../../assets/chef1.jpg'
import chef2 from '../../assets/chef2.jpg'
import './about.css'

function About() {
  const navigate = useNavigate()

  return (
    <main className='aboutContainer'>
      <section className="aboutContent">
        <article className='aboutLeft'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Numquam modi delectus nulla dolorem, eaque, fugiat inventore 
            doloremque facere quibusdam perferendis rerum distinctio harum 
            architecto voluptates cupiditate! Reprehenderit illo ipsum vel 
            quam blanditiis autem nihil laborum quis, cum praesentium consequuntur saepe.
          </p>
          <div className="btnGroup">
            <button onClick={ ()=> navigate('/menu') } className='aboutBtn'>Explore Our Menu</button>
            <button onClick={ ()=> navigate('/reservation') } className='aboutBtn'>Reserve A Table</button>
          </div>
        </article>
        <article className="aboutRight">
          <img src={chef1} alt='chef1' className='img1'></img>
          <img src={chef2} alt='chef2' className='img2'></img>
        </article>
      </section>      
    </main>
  )
}

export default About
