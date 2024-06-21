import React from 'react'
import "../css/sidebar.css"
import { FcBusiness } from 'react-icons/fc'
import { IoHomeSharp } from 'react-icons/io5'
import { PiTelevisionSimpleFill } from 'react-icons/pi'
import { BiSolidFirstAid } from 'react-icons/bi'
import { MdSportsCricket } from 'react-icons/md'
import { RiComputerFill } from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { setCategory } from '../features/optionsSlice';
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const handleOptionClick = (option) => {
    dispatch(setCategory(option));
    navigate("/");
    
  };
  return (
    <>
    <input type='checkbox' id='toggle' className='hidden'/>
    <label htmlFor="toggle" id="tgl"><GiHamburgerMenu /></label>

      <div className="drawer  absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)]">
      <div className='drawerMenu'>
        
        <button onClick={()=>{handleOptionClick("general")}} className='menuItems' content="home" > <IoHomeSharp/></button> 
        <button onClick={()=>{handleOptionClick("business")}} className='menuItems' content="Business"> <BsSuitcaseLgFill /></button> 
        <button onClick={()=>{handleOptionClick("entertainment")}} className='menuItems' content="Entertainment"><PiTelevisionSimpleFill/> </button> 
        <button onClick={()=>{handleOptionClick("health")}} className='menuItems' content="Health"> <BiSolidFirstAid/></button> 
        <button onClick={()=>{handleOptionClick("sports")}} className='menuItems' content="Sports"><MdSportsCricket/> </button> 
        <button onClick={()=>{handleOptionClick("tech")}} className='menuItems' content="Technology"> <RiComputerFill/></button> 
      </div>
      
     
   </div>
   
  
        </>
  )
}
