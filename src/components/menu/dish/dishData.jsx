import GreekSalad from '../../../assets/greek_salad.jpg'
import Bruschetta from '../../../assets/bruchetta.svg'
import LemonDessert from '../../../assets/lemon_dessert.jpg'
import ChickenPizza from '../../../assets/chicken_pizza.jpg'
import VegPizza from '../../../assets/veg_pizza.jpg'
import Pasta from '../../../assets/pasta.jpg'

export const dishData = {
    greekSalad : {
        dishName: 'Greek Salad',
        dishPrice: 12.99,
        dishDescription: `The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, garnished 
                            with crunchy garlic and rosemary croutons.`,
        dishImage: GreekSalad
    },
    bruschetta:{
      dishName: 'Bruschetta',
      dishPrice: 5.99,
      dishDescription: `Our Bruschetta is made from grilled 
              bread that has been smeared with garlic 
              and seasoned with salt and olive oil.`,
      dishImage: {Bruschetta}
    },
    lemonDessert:{
      dishName: 'Lemon Dessert',
      dishPrice: 5.00,
      dishDescription: `This comes straight from grandma's recipe book, 
              every last ingredient has been sourced and is as 
              authentic as can be imagined.`,
      dishImage: {LemonDessert}
    },
    chickenPizza:{
      dishName: 'Chicken Pizza',
      dishPrice: 10.00,
      dishDescription: `Made in-house, American Chicken Pizza has a robust, 
              gratifying flavour, with tender, seasoned chicken, 
              molten mozzarella, and tangy tomato sauce on a crispy crust.`,
      dishImage: {ChickenPizza}
    },
    vegPizza:{
      dishName: 'Vegetarian Pizza',
      dishPrice: 7.00,
      dishDescription: `A crispy, hand-tossed crust encases a plethora of fresh vegetables, 
              creamy tomato sauce, and mozzarella cheese in this vegetarian pizza.`,
      dishImage: {VegPizza}
    },
    pasta:{
      dishName: 'Red Sauce Pasta',
      dishPrice: 6.99,
      dishDescription: `Our Red Sauce Pasta is prepared by tossing 
              al dente pasta with a flavourful tomato sauce 
              that has been seasoned with herbs and spices.`,
      dishImage: {Pasta}
    },
}
