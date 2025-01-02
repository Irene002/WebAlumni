// COMPONTENTS
import Routing from './routes';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

const App = () => {
  return (
    <>
    <main className='relative'>
      <NavigationBar />
      <section>
        <Routing />
      </section>
      <MobileNav/>
      <Footer />
    </main>
    </>
  )
}

export default App