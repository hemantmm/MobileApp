import React, { useState } from 'react'
// import data from './DisplayData'
import data from '../data'
// import categories from './DisplayData'
import { Link, useParams } from 'react-router-dom';

function Display() {

  

// console.log(props.id);
//   const [data,setData]=useState(categories)
  
//  const filterResult = (categItem) => {
//   const result = data.filter((curData) => {
//     return curData.id === categItem;
//    });
//    setData(result);
//   };


const {productId}=useParams()
const thisProduct=data.find(prod=>prod.id===productId)
// const {image,title}=productss

console.log(thisProduct.title);

  return (
   <>


<img src={thisProduct.image} alt="" />
<h5 className='bg-red-600'>{thisProduct.title}</h5>
{/* <h4>is{match.params.id}</h4> */}


        {/* {data.map((values) => {
          const { id, title, price, image,stars,reviews,category} = values;
          console.log(values.category);
          return (
            <>

<div className="bg-gray-300 w-full mt-10">
     <div className="left">
        <span className="relative text-black top-5 left-20 font-bold text-2xl text-slate-500">Products</span>
     </div>

     <div className="grid grid-cols-3 gap-4 ml-5 p-16 text-black ">

<div className='border-2 border-black w-96'>
  <Link to={`/{title}/${id}`}>
<img src={image} alt="" className='w-64 ml-16 mt-10 mb-10' />
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
      <p>500</p>
      <p className='text-cyan-700 text-xl'>In stock</p>
      <p>1</p>
    </div>
    <div className='relative right-72 top-64 cursor-pointer '>
    <button className='border-2 text-2xl '>Add to cart</button>

    </div>
</div>

</div>
    </div> 


            </>
          );
        })} */}

     
     

   </>
  )
}

export default Display