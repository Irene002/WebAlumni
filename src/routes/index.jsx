import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from "../pages/Home";
import SeanAdare from '../pages/mahasiswa/ListMahasiswa/sean_adare';
import BillyTempolenehe from '../pages/mahasiswa/ListMahasiswa/billy_tempolenehe';
import EvandrixMamintade from '../pages/mahasiswa/ListMahasiswa/evandrix_mamintade';

const Routing = () => {
  return (
    <Routes>
        <Route
        path='/'
        element={<Home/>}
        >
        </Route>
        <Route path='/sean-adare' element={<SeanAdare/>}></Route>
        <Route path='/billy-tempolenehe' element={<BillyTempolenehe/>}></Route>
        <Route path='/evandrix-mamintade' element={<EvandrixMamintade/>}></Route>
    </Routes>
    
  )
}

export default Routing