//import { useState } from 'react'
// reactLogo from './assets/react.svg'
import Header from '../src/components/header'
import './App.css'
import Search_bar from '../src/components/searchbar'
import Movie_item from '../src/components/movieitem'

function App() {

  return (
    <>
      <Header/>
      <Search_bar/>
      <Movie_item/>

    </>
  )
}

export default App
