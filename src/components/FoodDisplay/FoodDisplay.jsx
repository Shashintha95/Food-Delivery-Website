//import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
import PropTypes from 'prop-types';



const FoodDisplay = ({category}) => {


    const{food_list} = useContext(StoreContext);
   // console.log(food_list); // Log to verify if data is being fetched
   // console.log(category); // Log the category prop

    
  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>
        <div className='food-display-list'>
{food_list.map((item,index) =>{
  if(category==="All" || category===item.category)
    {
    return<FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>


  }
    


})}

        </div>
    </div>
  )
}

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,  // Add validation for the category prop
};

export default FoodDisplay

