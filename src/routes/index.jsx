import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home.jsx'))
const Mahasiswa = lazy(() => import('../pages/Mahasiswa.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const MahasiswaDetail = lazy(() => import('../pages/MahasiswaDetail.jsx'))
const AngkatanDetail = lazy(() => import('../pages/AngkatanDetail'))

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
          <Route path='/mahasiswa/:angkatan/:name' element={<MahasiswaDetail />} />

          {/* Angkatan Pages */}
          <Route path='/mahasiswa/:angkatan' element={<AngkatanDetail />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Routing