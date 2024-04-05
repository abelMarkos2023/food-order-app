import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {food_list,removeFromCart,items,addToCart,subTotal,delivery} = useContext(StoreContext)

  // const subTotal = food_list.filter(item =>  Object.keys(items).includes(item._id)).reduce((acc,item) => acc + item.price * items[item._id],0)
  // const delivery = 10;
  const navigate = useNavigate()
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Increament</p>
          <p>Decreament</p>
        </div>
        <br />
        <hr />

        {
          food_list.filter(item =>  Object.keys(items).includes(item._id)).map(cart => (
            <>
            <div className="cart-items-title cart-items-item">
              <img src={cart.image} alt="" />
              <p>{cart.name}</p>
              <p>${cart.price}</p>
              <p>{items[cart._id]}</p>
              <p>${cart.price * items[cart._id]}</p>
              <p><img onClick={() => addToCart(cart._id)} src={assets.add_icon_green} className='cross' alt="" /></p>
              <p><img onClick={() => removeFromCart(cart._id)} className='cross' src={assets.remove_icon_red} alt="" /></p>
              
            </div>
            <hr />
            </>
          ))
        }
      </div>
      <div className="cart-bottom">
        <div className="cart-totals">
          <h2>Cart Details</h2>
        <div className="cart-totals-details">
          <p>Subtotal</p>
          <p>${subTotal}</p>
        </div>
        <hr />
        <div className="cart-totals-details">
          <p>Delivery</p>
          <p>${delivery}</p>
  
      </div>
      <hr />
      <div className="cart-totals-details">
          <p>Total</p>
          <p>${delivery + subTotal}</p>
  
      </div>
      <button className="checkout-btn" onClick = {() => navigate('/order')}>Proceed to Checkout</button>
        </div>

      
<div className="cart-promocode">
  <div className="cart-promocode-title">
    <p>Promo Code</p>
    <p>Enter your promo code</p>
  </div>
  <div className="cart-promocode-input">
    <input type="text" placeholder="Promo Code" />
  </div>
  <button className="promocode-btn">Apply Promo Code</button>
</div>
    </div>
    </div>
  )
}

export default Cart