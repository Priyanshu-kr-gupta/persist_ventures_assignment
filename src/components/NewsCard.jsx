import React from 'react'
import "../css/newscard.css"
import { Link } from 'react-router-dom'
export default function NewsCard(props) {
  return (
    <div className='w-[85%] h-auto flex-shrink-0 bg-slate-100 lg:m-5 md:m-4 sm:m-3 m-2 newscard' >
<div className="card w-full h-full">
  <div className='h-[45vh]' style={{backgroundImage:`url(${props.news.image_url})`,backgroundSize:"cover",backgroundPosition:"center"}}>

  <img className="card-img-top h-full w-full object-contain backdrop-blur-[7px]" src={props.news.image_url} alt="Card image cap"/>
  </div>
  <div className="card-body w-full flex flex-col justify-around h-[35vh]" style={{boxShadow:"0px -10px 2px 2px white"}}>
    <h5 className="card-title text-[20px] font-bold ">{(props.news.title).slice(0,45)+"..."}</h5>
    <hr/>
    <p className="card-text text-[18px]">{props.news.description.slice(0,70)+"..."}</p>
    <Link to={`/Article/${props.news.uuid}`} className="btn btn-dark">Read full article</Link>
  </div>
</div>
        </div>
  )
}
