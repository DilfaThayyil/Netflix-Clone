import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()

   const [apiData,setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
   })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTQ0NmIxNTY1NmZmYTJmNDI2MzFlYTY0NmMzYzIzYiIsIm5iZiI6MTcyNjEyNTQxMy43MDQ2NjcsInN1YiI6IjY2ZDVlNTYxNTBmODQyYzAyODI3NjE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mx_Txdt38FQMac8XaCYt3iT20JmzMias0zmaiFo2F1s'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onAbort={()=>{navigate}}/>
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.Type}</p>
      </div>
    </div>
  )
}

export default Player