import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div className='absolute w-[200px] right-2 top-[10vh] h-[50px] flex flex-col justify-around items-center bg-slate-800 text-white rounded-[20px]' style={{zIndex:"100",backdropFilter:"blur(20px)"}}>   
      
      <Link to={"/favourite"}><button className='flex items-center gap-2'>Saved News <FaExternalLinkAlt/></button></Link>
      {/* <div className={`form-check form-switch `}> */}
          {/* <input className='form-check-input' type='checkbox' id='flexSwitchCheckDefault' /> */}
          {/* <label className='form-check-label' htmlFor="flexSwitchCheckDefault">enabel  mode</label> */}

      {/* </div> */}
    </div>
  )
}
