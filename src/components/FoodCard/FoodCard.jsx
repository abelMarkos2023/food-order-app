import React, { useContext, useState } from 'react'
import './FoodCard.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodCard = ({item}) => {
    const {_id,name,price,image,description} = item;

    const [count,setCount] = useState(0)
    const {items,addToCart,removeFromCart} = useContext(StoreContext)

    const Counter = ({count,change}) => {
       
            return (
            <div className="count-control">
                <button className="inc" onClick={() => addToCart(_id)}>
                <img src={assets.add_icon_green} alt="" className="add" />
                </button>
            <span>{items[_id]}</span>
            <button className="dec" onClick={() => removeFromCart(_id)}>
            <img src={assets.remove_icon_red} alt="" />
            </button>
                </div>
            )
    }

  return (
    <div className="food-card">
        <div className="food-card-img-container">
            <img src={image} alt="" className="food-card-img" />
           
                {
                    (Object.keys(items).includes(_id) && items[_id] > 0)  ? (
               <Counter count={count} change={setCount}/>) : (
                <img className='count-control img' src= {assets.add_icon_green} onClick={() => addToCart(_id)} />
               )
                }
                
         
        </div>
        <div className="food-card-detail">
            <div className="food-card-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-card-description">{description}</p>
            <p className="food-card-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodCard