import React from 'react'

// COMPONTENTS
import Routing from './routes';
import NavBar from './Components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <NavBar/>
    <section>
    <Routing/>
    </section>
    <Footer/>

    </>
  )
}

export default App