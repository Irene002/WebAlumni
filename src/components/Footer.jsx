import React from 'react'

import {Link} from 'react-router-dom'

import { navLink } from './Links'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between text-white px-24 py-8'>
        2024 - 2025 &copy; Sistem Informasi Politeknik Negeri Nusa Utara
        <hr className='LineHorizontal border-solid border-white border-[1px] w-full' />
        <ul className='flex flex-row gap-8'>
        {navLink.map((value) => (
            <Link className='hover:scale-110 transition-all duration-300'
            to={value.path}>{value.link}</Link>
          ))}
        </ul>
    </footer>
  )
}

export default Footer