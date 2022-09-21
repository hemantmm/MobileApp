import React, { useEffect, useState } from 'react'
import './Slider.css'
// import logo from "./images/HikeLogo.jpg";
import logo from "./images/HikeLogo.jpg"

import data from "./data"
// import data from "../../data"

function Slider() {
  const [people]=useState(data)
  const [index,setIndex]=useState(0)


  useEffect(()=>{
    const lastIndex=people.length-1;
    if(index<0)
    {
      setIndex(lastIndex)
    }
    if(index>lastIndex)
    {
      setIndex(0)
    }
  },[index,people])


  useEffect(()=>{
let slider=setInterval(()=>{
  setIndex(index+1)
},5000)
return ()=>{
  clearInterval(slider)
}
  },[index])


  return (
    <>

<section className='section'>

<div className="section-center">
  {people.map((items,indexPeople)=>{
    let position="nextSlide"
    if(indexPeople===index)
    {
      position="activeSlide"
    }
    if(indexPeople===index-1 || (index===0 && indexPeople===people.length-1))
    {
      position="lastSlide"
    }
    return(
      <>
      <article className={position} key={items.id}>
<img src={items.image} alt={items.title} className="w-full h-96 " />
      </article>

      </>
    )

  })}
</div>
</section>
</>
    )
}

export default Slider