// COMPONTENTS
import Routing from './routes';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
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