import React from 'react'
import './movieitem.css'

const Movie_item = () => {
  return (
    <div className='movieName'>
        <div className='imgdiv'>
            <img src="" alt="movie image" />
        </div>
        <div className='detaildiv'>
            <p><strong>Movie Name:</strong></p>
            <p><strong>Realse Date:</strong></p>
            <p><strong>Rating</strong></p>
        </div>
        
      
    </div>
  )
}

export default Movie_item
