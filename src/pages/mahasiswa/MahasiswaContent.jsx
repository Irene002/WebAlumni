import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

import { useNavigate, useLocation } from 'react-router-dom';

import AnimationInView from '../../components/Animations/AnimationInView';
import cardDataMahasiswa from '../../components/cards/cardData/CardDataMahasiswa';

const MahasiswaContent = () => {
  
  AnimationInView('CardImage', 0.5)
  AnimationInView('ContentRight', 1.5)

  const navigate = useNavigate();

  const location = useLocation();
  const currentPath = location.pathname;

  const mahasiswa = cardDataMahasiswa.find ((card) => card.url === currentPath);

  return (
    <section className='px-24 pt-12 pb-32 SectionMahasiswa'>
      <button onClick={() => navigate (-1)} className='mb-12 flex flex-row gap-4 items-center hover:text-orange-500 transition-all duration-300 hover:scale-110'><FaArrowLeft/> Kembali</button>
      <div className='flex flex-row justify-center gap-[3.5rem] MahasiswaContentWrapper'>
{ mahasiswa ? (
  <>
      <div className='overflow-clip rounded-2xl shadow-md shadow-orange-950 flex h-96 w-[25%]' id="CardImage">
        <img className='pointer-events-none w-full h-auto object-cover' src={mahasiswa.ProfileImage} />      
      </div>
      <div className='w-[100%]' id='ContentRight'>
        <h2>{mahasiswa.nama}</h2>
        <h3>NIM : {mahasiswa.Nim}</h3>
        <hr className='border-black my-4 opacity-50' />
        <h2>Judul Proyek Akhir</h2>
        <h3 className='text-lg mt-2'>{mahasiswa.judulProyek}</h3>
        <div className='my-5'>
        <h2>Abstrak</h2>
        <p className='leading-[2.6] text-justify'>{mahasiswa.abstrakContent}</p>
        {mahasiswa?.linkJurnal && (
            <button onClick={() => window.open(mahasiswa.linkJurnal, '_blank')}
                    className='underline text-orange-500 mt-4'>
            Lihat Journal Selengkapnya
            </button>
                )}
        </div>
        <div className='my-5'>
        <h2>Lampiran</h2>
        <p className='leading-loose text-justify'></p>
        <div className='flex flex-wrap xl:justify-start lg:justify-start gap-8 md:justify-center sm:justify-center mt-8'>
        {mahasiswa?.lampiran1 && (
          <div className='flex w-96 h-60 overflow-clip rounded-lg shadow-md shadow-orange-950'>
            <img className='w-full h-auto object-cover' src={mahasiswa.lampiran1} />
          </div>  
        )}
        {mahasiswa?.lampiran2 && (
          <div className='flex w-96 h-60 overflow-clip rounded-lg shadow-md shadow-orange-950'>
            <img className='w-full h-auto object-cover' src={mahasiswa.lampiran2} />
          </div>  
        )}
        {mahasiswa?.lampiran3 && (
          <div className='flex w-96 h-60 overflow-clip rounded-lg shadow-md shadow-orange-950'>
            <img className='w-full h-auto object-cover' src={mahasiswa.lampiran3} />
          </div>  
        )}
        </div>
        </div>
      </div>
      </>
) : (<p>No matching data for this URL.</p>)}

      </div>
    </section>
  )
}

export default MahasiswaContent