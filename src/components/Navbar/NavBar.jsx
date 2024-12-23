import {Link} from 'react-router-dom';
import AnimationSlideDown from '../Animations/AnimationSlideDown';
import logo1 from '../../assets/logo-ti.png?format=webp'
import { FaBars } from 'react-icons/fa6';

import { navLink } from '../Links';

const NavBar = () => {
  AnimationSlideDown('Navbar', 0.5)

  const toggleVisibility = () => {
    document.querySelector('.menuHome').classList.toggle('visible');
};

    const closeMenu = () => {
        document.querySelector('.menuHome').classList.remove('visible');
    };

  return (
    <>
    <nav className='py-8 px-24 flex flex-row items-center justify-between shadow-sm shadow-orange-950' id='Navbar'>
        <Link className='flex flex-row gap-4 text-white items-center xl:text-xl lg:text-xl md:text-md sm:text-md' to={'/'} id='NavLogo'>
            <img className='w-14 h-14' src={logo1}/>
            EAST PENYNSULA
        </Link>
        <ul className='text-white flex flex-row gap-10'>
          {navLink.map((value) => (
            <Link className='hover:scale-110 transition-all duration-300'
            to={value.path}>{value.link}</Link>
          ))}
        </ul>
        <button onClick={toggleVisibility} className='text-white text-2xl menuBtn'><FaBars/></button>
    </nav>

    <div className='bg-[#FA812F] absolute w-full top-30 p-12 py-8 z-30 menuHome'>
      <ul className='text-white flex flex-col gap-8'>
      {navLink.map((value) => (
            <Link onClick={closeMenu} className='hover:scale-110 transition-all duration-300' to={value.path}>{value.link}
            </Link>
          ))}
      </ul>
    </div>
    </>
  )
}

export default NavBar