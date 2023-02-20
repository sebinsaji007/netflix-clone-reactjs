import React from 'react'
import './Banner.css'
import { API_KEY,imgUrl } from '../../constants/constants'
import axios from '../../axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[2])
      setmovie(response.data.results[2])
    })
  }, [])
  
  return (
    <div style={{backgroundImage: `url(${imgUrl+movie?.backdrop_path})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='Banner_button'>
                <button className='button'>play</button>
                <button className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner