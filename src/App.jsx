// COMPONTENTS
import { SpeedInsights } from '@vercel/speed-insights/react';
import Routing from './routes';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
    <NavigationBar/>
    <section>
    <Routing/>
    <SpeedInsights/>
    </section>
    <Footer/>

    </>
  )
}

export default App