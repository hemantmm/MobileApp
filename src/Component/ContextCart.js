import React,{useContext} from 'react'
import cartLogo from "../Images/cartLogo.jpg";
import Items from "./Items";
import { Scrollbars } from 'react-custom-scrollbars-2';
// import product from "./product";
import  {CartContext}  from './Cart';



const ContextCart = () => {

    // const [item,setItem]=useState(product)

    const {item,clearCart,totalItems,totalAmount} = useContext(CartContext)

    if(item.length === 0)
    {
      return (
        <>
        <header>
        <div className="continue-shopping">
          <img src="./images/HikeLogo.jpg" alt="logo" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src={cartLogo} alt="" />
          <p>0</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count"> 0 </span> items in
          shopping cart
        </p>
        </section>
        </>
      )
    }

  return (
    <>
 <header>
        <div className="continue-shopping">
          <img src="./images/HikeLogo.jpg" alt="logo" className="arrow-icon" />
          <h3>continue shopping</h3>
        </div>

        <div className="cart-icon">
          <img src={cartLogo} alt="" />
          <p>{totalItems}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>shopping cart</h1>
        <p className="total-items">
          You have <span className="total-items-count"> {totalItems} </span> items in
          shopping cart
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
          <Scrollbars>
            {
                item.map((curItem)=>{
                    return  <Items key={curItem.id} {...curItem} />
                })
            }

          
            
            </Scrollbars> 
          </div>
        </div>


<div className="card-total">
    <h3>Card total: <span>${totalAmount}</span></h3>
    <button>CheckOut</button>
    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
</div>

      </section>
    </>
  )
}

export default ContextCart