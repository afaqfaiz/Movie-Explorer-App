import React from 'react'
import Movie_item from './movieitem'
import './movielist.css'
const Movie_list = () => {
  return (
    <div className='main'>
      <Movie_item/>
      <Movie_item/>
    </div>
  )
}

export default Movie_list
