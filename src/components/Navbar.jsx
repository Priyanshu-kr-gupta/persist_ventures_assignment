import { CiMenuKebab } from "react-icons/ci";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FaArrowAltCircleRight, FaNewspaper } from 'react-icons/fa'
import Sidebar from './Sidebar'
import Menu from "./Menu";
import "../css/navbar.css"
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import {setSearchdata} from '../features/searchSlice';

export default function Navbar() {
const [menuToggler,setMenuToggler] = useState(0)
const [search,setSearch]=useState("")
const dispatch = useDispatch();

const srch = () =>{
  if(search!="")
    {
      dispatch(setSearchdata(search));
    }
    else
    {
      alert("enter something to search")
    }
}
  return (  
    <>
<nav className="navbar h-[10vh] m-0 p-0" style={{position:"sticky",top:"0px",zIndex:"9",backdropFilter:"blur(20px)"}}>

<div className="container-fluid">

  <div className='z-10 ml-[60px] flex items-center'>

        <a className="navbar-brand"><FaNewspaper/></a>
        <a className="navbar-brand brandname">Newstagram</a>
  </div>
  <Link to={"/search"}  className="search  lg:w-[50%] md:w-[50%]  bg-gray-50 flex"><input type='text' className='w-full lg:py-2 lg:px-[2%] md:py-2 md:px-[2%] bg-gray-50 outline-none' placeholder='Search by keywords' onChange={(e)=>{setSearch(e.target.value)}}/><button className="mr-2"><FaArrowAltCircleRight onClick={srch}/></button></Link>
   <div className='mr-3 cursor-pointer z-10 '>
   <button  onClick={()=>{setMenuToggler(!menuToggler)}}>{!menuToggler?<CiMenuKebab />:<GrClose/>}</button>

   </div>
            
</div>
{
      menuToggler?<Menu/>:""
}
</nav>

<Sidebar />


    </>
  )
}
