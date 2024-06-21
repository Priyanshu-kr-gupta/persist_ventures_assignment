import React, { useEffect, useState } from 'react'
import FavouriteCard from "../components/FavouriteCard"
export default function Favourite() {

  const [checkempty,setCheckempty]=useState(0);
  const [news,setNews]=useState([])
  useEffect(()=>{
    const favarray = localStorage.getItem("favourite");
      let arraydata= favarray ? JSON.parse(favarray) : [];
      if(arraydata.length===0)
        {
          setCheckempty(1);
        }
        else
        {
          setNews(arraydata)
        }
  },[])
  return (
  <>
  
    <div className='w-full h-[90vh] bg-slate-50'>
    

  
          <div className='newsContainer w-full h-[100%] overflow-y-scroll '>
          {
            checkempty?
            
            <div className='w-full h-full flex justify-center items-center'>No Saved News</div>
              :<div className='result h-auto w-full flex flex-col items-center mt-5'>
              {news.map((newsData) => (
                <FavouriteCard key={newsData} id={newsData} />
              ))}
      
              </div>
  }
  </div>
  </div>
  

  
  </>
)
}
