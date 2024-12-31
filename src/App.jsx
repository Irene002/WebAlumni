import React from 'react'

// COMPONTENTS
import Routing from './routes';
import Navbar from './Components/Navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <Navbar/>
    <section>
    <Routing/>
    </section>
    <Footer/>

    </>
  )
}

export default App