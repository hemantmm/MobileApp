import React from 'react'
// import CenterNavbar from '../CenterNavbar'
import CenterNavbar from './CenterNavbar'
import EndFooter from './EndFooter'
import Footer from './Products'
import Navbar from './Navbar'

function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <div className='navas'>
<div>
    <CenterNavbar />
</div>
<div>
    <Footer />
</div>
<div>
    <EndFooter />
</div>
    </div>
    </>
  )
}

export default Home