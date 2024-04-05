import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../context/StoreContext'
const Order = () => {

  const {subTotal,delivery} = useContext(StoreContext)
  return (
    <div className="order">
      <div className="left-container">
        <form>
          <h2>Customer Info</h2>
          <div className="form-group">
            <input type="text" placeholder='First Name' name='firstName' className="form-control" /><input type="text" className="form-control"  placeholder='Last Name' name='lastName' />
          </div>
          <div className="form-group">
            <input type="text" placeholder='Email Address' name='email' className="form-control" />
          </div>

          <div className="form-group">
            <input type="text" placeholder='Countery' name='countrey' className="form-control" />
            <input type="text" className="form-control"  placeholder='State' name='state' />
            <input type="text" className="form-control"  placeholder='City' name='city' />
          </div>

          <div className="form-group">
            <input type="text" placeholder='Neighberhood' name='Hood' className="form-control" />
            <input type="text" className="form-control"  placeholder='Block' name='block' />
            <input type="text" className="form-control"  placeholder='Street' name='street' />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder='Phone Number' name='Phone' />
            <input type="text" className="form-control" placeholder='Zip Code' name='zip' />
          </div>
          <button className="order-btn" type='Submit'>
            Order Now
          </button>
        </form>
      </div>
      <div className="right-container">
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
      
        </div>
      </div>
    </div>
  )
}

export default Order