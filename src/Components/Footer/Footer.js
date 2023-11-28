import React from 'react'
import logo from "../../assets/density.svg"
import fb from "../../assets/fb.svg"
import twitter from "../../assets/twitter.svg"
import linkdin from "../../assets/linkdin.svg"
import insta from "../../assets/insta.svg"
const Footer = () => {
  return (
    <footer className='bg-green-500 p-10 w-full flex flex-col justify-center items-center gap-3'>
<img src={logo}/>
<div className='flex flex-col max-w-xl gap-3'>
<div className='flex justify-around text-sm '>
    <a>Blog</a>
    <a>Fees</a>
    <a>Leaderboard</a>
    <a>Careers</a>
    <a>Contact Us</a>
    <a>Privacy Policy</a>
</div>
<p className='text-center text-xs'>Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde. </p>

</div>

<div className='flex gap-5'>
    <img src={fb}/>
    <img src={twitter}/>
    <img src={linkdin}/>
    <img src={insta}/>
</div>
<div>

</div>
    </footer>
  )
}

export default Footer