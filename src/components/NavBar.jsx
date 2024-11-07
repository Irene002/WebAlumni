import React from 'react'
import {Link} from 'react-router-dom';
import AnimationSlideDown from '../components/Animations/AnimationSlideDown';

const NavBar = () => {
  AnimationSlideDown('Navbar', 0.5)
  return (
    <nav className='py-8 px-24 flex flex-row justify-between' id='Navbar'>
        <Link to={'/'} className='text-white text-lg'>
            EAST PENYNSULA
        </Link>
        <ul className='text-white flex flex-row gap-10'>
            <Link className='hover:scale-110 transition-all duration-300' to={'/mahasiswa'}>Mahasiswa</Link>
            <Link className='hover:scale-110 transition-all duration-300' to={'/dosen-pembimbing'}>Dosen Pembimbing</Link>
        </ul>
    </nav>
  )
}

export default NavBar