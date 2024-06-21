import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import "../css/search.css"
import "../css/home.css"
import NewsCard from "../components/NewsCard"
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate=useNavigate();
  const [news,setNews]=useState([]);
  const [loading,setLoading]=useState(false)
  const [currentpage,setCurrentpage]=useState(1);
  const [pagecount,setPagecount]=useState([]);
  const totalpage=[];
  const apiKey = import.meta.env.VITE_API_KEY;
  let totalpg
  const srch = useSelector((state) => state.  search.searchdata);

  const getSearchedData = async() =>{
    setLoading(false);

    let dataurl=" https://api.thenewsapi.com/v1/news/top?api_token="+apiKey+"&search="+srch;
    
    let data=await fetch(dataurl);
    let parsedata=await data.json();
    if(parsedata.error)
      {
        navigate(`/err/${parsedata.error.message}`)

      }
    setNews(parsedata.data);
    setLoading(true);
    if(parsedata.meta.found>20000)
      {
        totalpg=6500;
      } 
      else
      {
        totalpg=Math.ceil((parsedata.meta.found)/3);
      }
    for (let i = 1; i <= totalpg; i++) {
      totalpage.push(i);
    }
    setPagecount(totalpage);
  }

    useEffect(()=>{
      // console.log(srch)
      if(srch!="")
      getSearchedData();
    },[srch])
  return (
    <>
    <div className='w-full h-[90vh] bg-slate-50 srh'>
      {
        srch==""?
        <div className="d-flex justify-content-center h-[90vh] items-center">
      <p>Type something to search</p>
    </div>:<></>
    }
       {
         loading?
         <div className='newsContainer w-full h-[100%] overflow-y-scroll '>
          {/* <p className='ml-[5vw] mb-1'> {selectedCategory}</p> */}
              <div className='result h-auto w-full flex flex-col items-center mt-5'>
              {news.map((newsData) => (
                <NewsCard key={newsData.uuid} news={newsData} />
              ))}
                <ul className="pagination pagination-sm overflow-x-scroll gap-2 px-2 py-2 w-[90%] bg-slate-700" style={{scrollSnapAlign:"center"}}>
    
                {
      pagecount.map((data)=>{

        return <li className="page-item" key={data}><button className="page-link" style={{background:data==currentpage?"grey":"aliceblue"}} onClick={()=>{setCurrentpage(data)}}>{data}</button></li>
      }
    
    )
      
      
    }
  </ul>
              </div>



    </div>:
    <div className="d-flex justify-content-center h-[90vh] items-center">
<div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
}
    </div>
      </>
  )
}
