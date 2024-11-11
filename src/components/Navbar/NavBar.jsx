import React from 'react'
import {Link} from 'react-router-dom';
import AnimationSlideDown from '../Animations/AnimationSlideDown';
import logo1 from '../../assets/logo-ti.png'
import { FaBars } from 'react-icons/fa6';

import { navLink } from '../Links';

const NavBar = () => {
  AnimationSlideDown('Navbar', 0.5)
  return (
    <>
    <nav className='py-8 px-24 flex flex-row items-center justify-between' id='Navbar'>
        <Link className='flex flex-row gap-4 text-white items-center text-xl' to={'/'} id='NavLogo'>
            <img className='w-14 h-14' src={logo1}/>
            TEKNOLOGI INFORMATIKA
        </Link>
        <ul className='text-white flex flex-row gap-10'>
          {navLink.map((value) => (
            <Link className='hover:scale-110 transition-all duration-300'
            to={value.path}>{value.link}</Link>
          ))}
        </ul>
        <input type='checkbox' id='menu'></input>
        <label htmlFor="menu" className='text-white text-2xl menuBtn'><FaBars/></label>
    </nav>

    <div className='bg-[#FA812F] absolute w-full top-30 h-[10rem] p-12 py-8 z-30' id='SideBar'>
      <ul className='text-white flex flex-col gap-4'>
      {navLink.map((value) => (
            <Link className='hover:scale-110 transition-all duration-300'
            to={value.path}>{value.link}</Link>
          ))}
      </ul>
    </div>
    </>
  )
}

export default NavBar