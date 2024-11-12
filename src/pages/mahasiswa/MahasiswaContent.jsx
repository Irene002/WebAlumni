import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

import { useNavigate, useLocation } from 'react-router-dom';

import AnimationInView from '../../components/Animations/AnimationInView';
import cardDataMahasiswa from '../../components/cards/cardData/CardDataMahasiswa';

const MahasiswaContent = ({NamaMahasiswa,GambarMahasiswa,NIM,JudulProyek,AbstrakContent}) => {
  
  AnimationInView('CardImage', 0.5)
  AnimationInView('ContentRight', 1.5)

  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const mahasiswa = cardDataMahasiswa.find ((card) => card.url === currentPath);

  return (
    <section className='px-24 pt-12 pb-32'>
      <button onClick={() => navigate (-1)} className='mb-12 flex flex-row gap-4 items-center hover:text-orange-500 transition-all duration-300 hover:scale-110'><FaArrowLeft/> Kembali</button>
      <div className='flex justify-between gap-8'>
{ mahasiswa ? (
  <>
      <div className='overflow-clip rounded-2xl shadow-md shadow-orange-950 flex h-96 w-1/5' id="CardImage">
        <img className='w-full h-auto object-cover' src={mahasiswa.ProfileImage} />      
      </div>
      <div className='w-3/4' id='ContentRight'>
        <h2>{mahasiswa.nama}</h2>
        <h3>{mahasiswa.Nim}</h3>
        <hr className='border-black my-4' />
        <h2>Judul Proyek Akhir</h2>
        <h3>{mahasiswa.judulProyek}</h3>
        <div className='my-5'>
        <h2>Abstrak</h2>
        <p className='leading-loose text-justify'>{mahasiswa.abstrakContent}</p>
        </div>
      </div>
      </>
) : (<p>No matching data for this URL.</p>)}

      </div>
    </section>
  )
}

export default MahasiswaContent