import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from "../pages/Home";
import Mahasiswa from '../pages/Mahasiswa';
import Tabel from '../Tabel/Tabel'
import TablePage from '../Tabel/TablePage';

import cardDataMahasiswa from '../components/cards/cardData/CardDataMahasiswa';

import MahasiswaContent from '../pages/mahasiswa/MahasiswaContent';

const Routing = () => {
  return (
    <Routes>
        <Route
        path='/'
        element={<Home/>}
        >
        </Route>
        <Route path='/mahasiswa' element={<Mahasiswa/>}></Route>

        {/* MAHASISWA ROUTES */}
       {cardDataMahasiswa.map ((card, index) =>(
        <Route
        key={index}
        path={card.url}
        element={<MahasiswaContent/>}
        >

        </Route>
       ))}

        <Route path='/tabel' element={<Tabel/>}></Route>
        <Route path='/table-page' element={<TablePage/>}></Route>
    </Routes>
    
  )
}

export default Routing