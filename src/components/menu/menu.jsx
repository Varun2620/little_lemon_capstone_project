import React from 'react'
import { useNavigate } from 'react-router-dom'
import GreekSalad from '../../assets/greek_salad.jpg'
import Bruschetta from '../../assets/bruchetta.svg'
import LemonDessert from '../../assets/lemon_dessert.jpg'
import ChickenPizza from '../../assets/chicken_pizza.jpg'
import VegPizza from '../../assets/veg_pizza.jpg'
import Pasta from '../../assets/pasta.jpg'
import WhitePasta from '../../assets/whiteSauce_pasta.jpg'
import './menu.css'

function Menu() {
  const navigate = useNavigate()

  function handleClick(dishName){
    navigate(`/${dishName}`)
  }

  return (
    <main className='menuContainer'>
      <section className="menuContent">
        <article className='foodContainer'>
          <img src={GreekSalad} alt='Greek Salad'/>
          <div className="foodText">  
            <h3>Greek Salad</h3 >
            <p><strong>Price:</strong> $12.99</p>
            <p>
              The famous greek salad of crispy lettuce, peppers, 
              olives and our Chicago style feta cheese, garnished 
              with crunchy garlic and rosemary croutons.
            </p>
            
            <button className='menuBtn' onClick={()=> (handleClick('greekSalad'))}>Order</button>
          </div>
        </article>

        <article className='foodContainer'>
          <img src={Bruschetta} alt='Bruschetta'/>
          <div className="foodText">  
            <h3>Bruschetta</h3 >
            <p><strong>Price:</strong> $5.99</p>
            <p>
              Our Bruschetta is made from grilled 
              bread that has been smeared with garlic 
              and seasoned with salt and olive oil.
            </p>
            
            <button className='menuBtn' onClick={()=>(handleClick('bruschetta'))}>Order</button>
          </div>
        </article>

        <article className='foodContainer'>
          <img src={LemonDessert} alt='Lemon Dessert'/>
          <div className="foodText">  
            <h3>Lemon Dessert</h3>
            <p><strong>Price:</strong> $5.00</p>
            <p>
              This comes straight from grandma's recipe book, 
              every last ingredient has been sourced and is as 
              authentic as can be imagined.
            </p>
            
            <button className='menuBtn' onClick={()=>(handleClick('lemonDessert'))}>Order</button>
          </div>
        </article>

        <article className='foodContainer'>
          <img src={ChickenPizza} alt='Chicken Pizza'/>
          <div className="foodText">  
            <h3>Chicken Pizza</h3 >
            <p><strong>Price:</strong> $10</p>
            <p>
              Made in-house, American Chicken Pizza has a robust, 
              gratifying flavour, with tender, seasoned chicken, 
              molten mozzarella, and tangy tomato sauce on a crispy crust.
            </p>
            
            <button className='menuBtn' onClick={()=>(handleClick('chickenPizza'))}>Order</button>
          </div>
        </article>

        <article className='foodContainer'>
          <img src={VegPizza} alt='Vegetarian Pizza'/>
          <div className="foodText">  
            <h3>Vegetarian Pizza</h3 >
            <p><strong>Price:</strong> $7</p>
            <p>
              A crispy, hand-tossed crust encases a plethora of fresh vegetables, 
              creamy tomato sauce, and mozzarella cheese in this vegetarian pizza.
            </p>
            
            <button className='menuBtn' onClick={()=>(handleClick('vegPizza'))}>Order</button>
          </div>
        </article>

        <article className='foodContainer'>
          <img src={Pasta} alt='Red Sauce Pasta'/>
          <div className="foodText">  
            <h3>Red Sauce Pasta</h3 >
            <p><strong>Price:</strong> $6.99</p>
            <p>
              Our Red Sauce Pasta is prepared by tossing 
              al dente pasta with a flavourful tomato sauce 
              that has been seasoned with herbs and spices.
            </p>
            
            <button className='menuBtn' onClick={()=>(handleClick('pasta'))}>Order</button>
          </div>
        </article>

        <article className='foodContainer'>
          <img src={WhitePasta} alt='White Sauce Pasta'/>
          <div className="foodText">  
            <h3>White Sauce Pasta</h3 >
            <p><strong>Price:</strong> $4.99</p>
            <p>
              Creamy white sauce pasta made with rich cheese, 
              milk, and herbs, offering a smooth, savory flavor perfect for any meal.
            </p>
            
            <button className='menuBtn' onClick={()=>(handleClick('whitePasta'))}>Order</button>
          </div>
        </article>

        <h3 >Dine in to explore our full menu!</h3 >
      </section>
    </main>
  )
}

export default Menu
