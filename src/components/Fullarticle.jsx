import React, { useEffect ,useState} from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom'
export default function Fullarticle() {
  const [saved,setSaved]=useState(0)
  const [loading,setLoading]=useState(false)
    const [news,setNews]=useState({});
  const {id}=useParams();
  const apiKey = import.meta.env.VITE_API_KEY;

    const getfullarticle=async ()=>{
        let dataurl=`https://api.thenewsapi.com/v1/news/uuid/${id}?api_token=`+apiKey;
    
    let data=await fetch(dataurl);
    let parsedata=await data.json();
    if(parsedata.error)
      {
        navigate(`/err/${parsedata.error.message}`)

      }
    setNews(parsedata);
    setLoading(true);

    }
    const savenews=(id)=>{
      const favarray = localStorage.getItem("favourite");
      let arraydata= favarray ? JSON.parse(favarray) : [];
      if(!saved)
      {

        arraydata.push(id);
        localStorage.setItem("favourite", JSON.stringify(arraydata));
        setSaved(1)
      }
      else
      {
        const newArray = arraydata.filter(value => value !== id);
        localStorage.setItem("favourite", JSON.stringify(newArray));
        setSaved(0)
      }
    }
    useEffect(()=>{
        getfullarticle();
    },[])
  return (
    <>
    {
        loading?
        <div className='w-[90%] h-[85vh] flex-shrink-0 bg-slate-100 newscard ml-[5%] mt-4 overflow-x-auto' >
    <div className="card w-full h-full">
      <div className='h-[50vh]' style={{backgroundImage:`url(${news.image_url})`,backgroundSize:"cover",backgroundPosition:"center"}}>
    
      <img className="card-img-top h-full w-full object-contain backdrop-blur-[7px]" src={news.image_url} alt="Card image cap"/>
      </div>
      <div className='flex justify-between px-2 mb-2 mt-2'>
        <p>
          {news.published_at.slice(0,10)}
        </p>
        <button onClick={()=>{savenews(news.uuid)}} className='px-3 py-1 bg-slate-200'>
          {!saved?"Save":"Remove"} 
        </button>
      </div>
      <div className="card-body w-full flex flex-col justify-around h-auto " >
        <h5 className="card-title text-[20px] font-bold ">{(news.title)}</h5>
        <hr/>
        <p className="card-text text-[18px] mt-4 mb-5">{news.description}</p>
      </div>
      <div className='flex justify-between px-2 mb-2'>
        <p>
          {news.source}
        </p>
        <a href={news.url} target='_blank'><FaExternalLinkAlt/></a>
      </div>
    </div>
    </div>
    
    :
    <div className="d-flex justify-content-center h-[90vh] items-center">

<div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</div>
    }
    </>
  )
}
