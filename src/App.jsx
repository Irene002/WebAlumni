import React from 'react'

// COMPONTENTS
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer';
import Routing from './routes';

const App = () => {
  const navLink =[
    {link: 'test', path: 'test'}
  ]
  return (
    <>
    <NavBar/>

    <Routing/>

    <Footer/>
    </>
  )
}

export default App