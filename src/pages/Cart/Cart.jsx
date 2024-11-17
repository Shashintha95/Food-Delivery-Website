import { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  
   const {cartItems,removeFromCart , getTotalCartAmount} = useContext(StoreContext);
   const navigate = useNavigate();
    return (
      <div className='cart'>
        <div className='cart-item'>
          <div className="cart-items-title">

            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br/>
          <hr/>
          {food_list.map((item)=>{

            if(cartItems[item._id]>0)
            {
              return(
                <div key={item._id}>
                  <div className='cart-items-title cart-items-items'>
                  <img src={item.image} alt=""/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p onClick = {()=>removeFromCart(item._id)}className='cross'>X</p>
                  </div>
                  <hr/>
                  </div>
                
              )
            }
          })}
        </div>
        <div className='cart-bottom'>
          <div className='cart-total'>
            <h2>Cart Total</h2>
            <div>
            <hr/>

              <div className="cart-total-details"> 
                <p>sub total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>

              <div className="cart-total-details">
              <p>Delevery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>

              </div>
              <hr/>
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0 :getTotalCartAmount()+2}</b>
              </div>
              <hr/>

              <button onClick={()=>navigate('/order')}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
          <div className='cart-promocode'>
            <div>
              <p>If you have promo code , Enter here</p>
              <div className='cart-promocode-input'>
                <input type="text" placeholder='promocode'/>
                <button>Submit</button>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  
}

export default Cart