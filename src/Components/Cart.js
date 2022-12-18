// import React, { useState } from 'react'
// import data from '../data'

// function Cart(props) {

//   const [cart, setCart] = useState([]);
  
//   const removeFromCart = (productToRemove) => {
//     setCart(cart.filter((product) => product !== productToRemove));
//   };

//   console.log(props.price)

//   console.log("hel");
//   return (
//     <>
//     <div className='bg-blue-500'>Cart</div>

//     </>
//   )
// }

// export default Cart






import React, { useState } from 'react'
import data from '../data'
import { Link, useParams } from 'react-router-dom';
// import Cart from '../Components/Cart';


function Cart() {


const {productId}=useParams();
const thisProduct=data.find(prod=>prod.id==productId)
const {image,title,stars,reviews,price,id}=thisProduct

console.log(thisProduct.title);


 let [num, setNum]= useState(1);
  let incNum =()=>{
    if(num<20)
    {
    setNum(Number(num)+1);
    }
  };
  let decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

  return (
   <>


<div className="bg-gray-300 w-full mt-10">

<div className='ml-20 text-xl text-red-400'>
  <Link to={`/`}> Back to home page </Link>
</div>

     <div className="left">
        <span className="relative text-black top-5 left-20 font-bold text-2xl text-slate-500">Products</span>
     </div>

     <div className="grid grid-cols-3 gap-4 ml-5 p-16 text-black ">

<div className='border-2 border-black w-96'>
  <Link to={`/{title}/${id}`}>
<img src={image} alt="" className='w-96 h-80' />
</Link>
</div>
<div>
  <h2 className='font-bold text-2xl ml-10'>items</h2>
  <div className='flex flex-row justify-around text-2xl'>
    <p>{stars}</p>
    {reviews}
  </div>
  <p className="text-xl ml-10">${price}</p>
  <span className='text-2xl ml-10'>Description</span>
  <p className='ml-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sapiente molestias explicabo temporibus consectetur totam? Est vel doloribus, facere voluptatum eos temporibus tempore.</p>
</div>

  <div className='border-2 h-80 flex flex-row overflow-hidden'>
    
    <div className='left flex flex-col mt-7 justify-around h-40 ml-5'>
      <p>Total Amount</p>
      <p>Stock</p>
      <p>Qty</p>
    </div>

    
    <div className='right flex flex-col ml-48 mt-10 justify-around h-40 '>
      <p>${price*num}</p>
      <p className='text-cyan-700 text-xl'>In stock</p>


      <div className='flex w-20 justify-between ml-10 relative right-16'>
        <button class="bg-red-500  " type="button" onClick={decNum}>-</button>
  {/* <input type="text" className="w-2 bg-gren-500" value={num} onChange={handleChange}/> */}
  <input type="number" className='ml-2 mr-2 text-xl w-10' name="" value={num} onChange={handleChange} />
    <button class="bg-blue-500" type="button" onClick={incNum}>+</button>
  </div>


    </div>

     
    <div className='relative right-72 top-60 cursor-pointer '>
    <Link to={`/cart`} className=' w-32  text-2xl absolute left-2'>
    {/* <Cart price="1"/ > */}
      Add to cart
      </Link>

    </div>

</div>

</div>
    </div> 

   </>
  )
}

export default Cart