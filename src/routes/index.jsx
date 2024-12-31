import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const Mahasiswa = lazy(() => import('../Pages/Mahasiswa.jsx'))
const About = lazy(() => import('../Pages/About.jsx'))
const MahasiswaDetail = lazy(() => import('../Pages/MahasiswaDetail.jsx'))

const Routing = () => {
  return (
    <>
        <Suspense fallback={
          <div className='w-full flex justify-center items-center inset-0 bg-orange-200 h-screen'>
            <h1 className='animate-pulse'>Loading...</h1>
          </div>
        }>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mahasiswa' element={<Mahasiswa />} />
            <Route path='/tentang' element={<About />} />
            <Route path='/mahasiswa/:name' element={<MahasiswaDetail />} />
          </Routes>
        </Suspense>
    </>
  )
}

export default Routing