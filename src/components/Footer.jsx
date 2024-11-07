import React from 'react'

import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='flex flex-row justify-between text-white px-24 py-8'>
        2024 - 2025 &copy; Sistem Informasi Politeknik Negeri Nusa Utara
        <ul className='flex flex-row gap-8'>
        <Link className='hover:scale-110 transition-all duration-300' to={'/mahasiswa'}>Mahasiswa</Link>
        <Link className='hover:scale-110 transition-all duration-300' to={'/dosen-pembimbing'}>Dosen Pembimbing</Link>
        </ul>
    </footer>
  )
}

export default Footer