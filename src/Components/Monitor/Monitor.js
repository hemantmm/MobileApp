import React from 'react'
import data from './Monitordata'

function Monitor() {
  return (
    <>
    <div className="bg-gray-300  ml-10 mr-10">
     <div className="left mt-10">

     <span className="relative text-black top-5 left-32 font-bold text-2xl text-slate-500">Products Under Monitor</span>

        {/* <h3>hello</h3> */}
     </div>
     <div className="bottom">

     <div className="grid grid-cols-2 w-2/4 ml-16 p-16 ">
        {data.map((values) => {
          const { id, title, price, image,stars,reviews,category} = values;
          console.log(values.category);
          return (
            <>
            {/* <Link to={`/${category}/${id}`}> */}
              <div className="border-2 border-slate-500 h-72 w-48 flex items-center bg-yellow-300 text-black" key={id}>
                <div className="flex flex-col  cursor-pointer">
                  <img src={image} className="w-40 ml-4 mt-4" alt="..." />

                  <h5 className=" text-2xl mt-10 ml-5 ">{title}</h5>
                  <div className="flex flex-row justify-around text-xl">
                    <p className="ml-5">
                    {stars} 
                    </p>
                  {reviews}</div>
                  <p className="text-xl ml-5">${price}</p>
                  {/* <p
                    className="border-3 text-lg font-bold cursor-pointer w-36 ml-5 text-center"
                    onClick={() => setIncrease(increase + 1)}
                  >
                    {content}
                  </p> */}
                  {/* <button className="border-3 text-lg font-bold cursor-pointer w-36 ml-5 text-center" onClick={() => setIncrease(increase + 1)} >Add to cart</button> */}
                </div>
              </div>
              {/* </Link> */}
            </>
          );
        })}
      </div>

     
     </div>
    </div>
    </>
  )
}

export default Monitor