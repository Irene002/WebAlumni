import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from "../pages/Home";
import Mahasiswa from '../pages/Mahasiswa';
import Tabel from '../Tabel/Tabel'
import TablePage from '../Tabel/TablePage';

import SeanAdare from '../pages/mahasiswa/ListMahasiswa/sean_adare';
import BillyTempolenehe from '../pages/mahasiswa/ListMahasiswa/billy_tempolenehe';
import EvandrixMamintade from '../pages/mahasiswa/ListMahasiswa/evandrix_mamintade';
import SupriadinataMasihor from '../pages/mahasiswa/ListMahasiswa/supriadinata_masihor';

const Routing = () => {
  return (
    <Routes>
        <Route
        path='/'
        element={<Home/>}
        >
        </Route>
        <Route path='/mahasiswa' element={<Mahasiswa/>}></Route>
        
        <Route path='/mahasiswa/sean-adare' element={<SeanAdare/>}></Route>
        <Route path='/mahasiswa/billy-tempolenehe' element={<BillyTempolenehe/>}></Route>
        <Route path='/mahasiswa/evandrix-mamintade' element={<EvandrixMamintade/>}></Route>
        <Route path='/mahasiswa/supriadinata-masihor' element={<SupriadinataMasihor/>}></Route>

        <Route path='/tabel' element={<Tabel/>}></Route>
        <Route path='/table-page' element={<TablePage/>}></Route>
    </Routes>
    
  )
}

export default Routing