import React from 'react'


function GoToTop() {

const goToBtn=()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"})
}

  return (
    <div className='top-btn ml-96 overflow-x-hidden text-black' onClick={goToBtn}>
        <h1 className='ml-96 relative left-96'>Button</h1>
    </div>
  )
}

export default GoToTop