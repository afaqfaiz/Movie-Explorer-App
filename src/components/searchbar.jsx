import React from 'react'
import {useState} from  'react';

import './searchbar.css'
const Search_bar =()=>{

    const [movie,setmovie]=useState('');

    const handleSearch= () => {
        //api fetch code
        console.log(`searching for ${movie}`)
    }

    return(
        <div className='searchbar'>
            <input className='input_txt'
             type="text"
             placeholder="Movie Name"

             value={movie}
             onChange={(e)=>setmovie(e.target.value)}
             />
            <div onClick={handleSearch} className='sicondiv'>
                <img src="../src/assets/searchicon.png" alt="search" className='searchicon' /> 
            </div>

        </div>
    );

};
export default Search_bar;