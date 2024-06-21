import React from 'react'
import { CgDanger } from 'react-icons/cg'
import { useParams } from 'react-router-dom'

export default function Errorpage() {
  const {error}=useParams();

  return (
    <div className='w-full h-[90vh] flex flex-col justify-center items-center  bg-slate-50'><CgDanger className='text-[red] text-[50px]'/><div className='w-[85%] h-auto text-center break-words'>{error}</div></div>
  )
}
