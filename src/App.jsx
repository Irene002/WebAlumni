import React from 'react'

// COMPONTENTS
import Routing from './routes';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
const App = () => {
  return (
    <>
    <NavigationBar/>
    <section>
    <Routing/>
    </section>
    <Footer/>

    </>
  )
}

export default App