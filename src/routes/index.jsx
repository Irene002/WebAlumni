import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home.jsx'))
const Mahasiswa = lazy(() => import('../pages/Mahasiswa.jsx'))
const About = lazy(() => import('../pages/About.jsx'))
const MahasiswaDetail = lazy(() => import('../pages/MahasiswaDetail.jsx'))
const Angkatan2019 = lazy(() => import('../pages/angkatan/Angkatan2019.jsx'))
const Angkatan2020 = lazy(() => import('../pages/angkatan/Angkatan2020.jsx'))
const Angkatan2021 = lazy(() => import('../pages/angkatan/Angkatan2021.jsx'))
const Angkatan2022 = lazy(() => import('../pages/angkatan/Angkatan2022.jsx'))
const SpeedInsights = lazy(() => import('../pages/misc/SpeedInsights.jsx'))

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
            <Route path='/stats' element={<SpeedInsights />} />

            {/* Angkatan Pages */}
            <Route path='/mahasiswa/2019' element={<Angkatan2019 />} />
            <Route path='/mahasiswa/2020' element={<Angkatan2020 />} />
            <Route path='/mahasiswa/2021' element={<Angkatan2021 />} />
            <Route path='/mahasiswa/2022' element={<Angkatan2022 />} />
          </Routes>
        </Suspense>
    </>
  )
}

export default Routing