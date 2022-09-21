import React from 'react'
import data from './data'
import './EndFooter.css'

function EndFooter() {
  return (
    <div className=" grid h-96 place-items-center bg-gray-300  mt-20 text-xl">

    <div className='left'>
    <span className="relative text-black left-0 font-bold text-2xl text-slate-500">More Products</span>
     </div>
     <div className="slider">

     <div className=" slide-track">
        {data.map((values) => {
          const { id, title, price, image,stars,reviews} = values;
          return (
            <>

              <div className="slide " key={id}>
                  <img src={image} className="h-64 w-96" alt="..." />

                  {/* <h5 className=" text-2xl mt-10 ml-5 ">{title}</h5>
                  <div className="flex flex-row justify-around text-2xl">
                    <p className="ml-1">
                    {stars} 
                    </p>
                  {reviews}</div>

                  <p className="text-xl ml-5">Price: {price}</p> */}
                  </div>
            
            </>
          );
        })}
      </div>
    </div>
    </div>
  )
}

export default EndFooter