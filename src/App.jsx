import React from 'react'

// COMPONTENTS
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import Routing from './routes';

import {Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
    <NavBar/>


    <Routing/>

    <Footer/>
    </>
  )
}

export default App