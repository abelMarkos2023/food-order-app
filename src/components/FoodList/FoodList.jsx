import React, { useContext } from 'react';
import './FoodList.css';
import { StoreContext } from '../../context/StoreContext';
import FoodCard from '../FoodCard/FoodCard';
const FoodList = ({category}) => {

    const {food_list} = useContext(StoreContext);

    const filteredList = category === 'all'? food_list : food_list.filter(item => item.category == category)
  return (
    <div className="food-list">
        <h2>Top dishes near you</h2>
        <div className="food-list-items">
            {
                filteredList.map((item,index) => (
                    <FoodCard key={index} item={item} />
                ))
            }
        </div>
    </div>
  )
}

export default FoodList