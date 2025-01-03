import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// DATA MAHASISWA
import Angkatan2022 from '../DataMap/Angkatan2022.json'
import Angkatan2021 from '../DataMap/Angkatan2021.json'
import Angkatan2020 from '../DataMap/Angkatan2020.json'
import Angkatan2019 from '../DataMap/Angkatan2019.json'

import MahasiswaPhoto from '../DataMap/MahasiswaPhoto'

import { FaXmark } from 'react-icons/fa6'

const MahasiswaDetail = () => {

  const { DataMahasiswa2022 } = Angkatan2022
  const { DataMahasiswa2021 } = Angkatan2021
  const { DataMahasiswa2020 } = Angkatan2020
  const { DataMahasiswa2019 } = Angkatan2019

  const { angkatan, name } = useParams()
  const formattedName = name.replace(/-/g, ' ')

  const DataSeluruhMahasiswa = [...DataMahasiswa2022, ...DataMahasiswa2021, ...DataMahasiswa2020, ...DataMahasiswa2019]
  const mahasiswa = DataSeluruhMahasiswa.find(mhs => mhs.Angkatan === angkatan && mhs.Nama.toLowerCase() === formattedName.toLowerCase())

  if (!mahasiswa) {
    return (
      <>
        <div className='flex h-screen justify-center items-center p-32'>
          <div className='text-center'>
            <h1 className='text-1xl'>Error 404</h1>
            <h2 className='text-xl font-normal'>Mahasiswa <span className='text-red-500'> {formattedName} </span> not Found</h2>
          </div>
        </div>
      </>
    )
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLampiran, setSelectedLampiran] = useState(null);

  const openModal = (lampiran) => {
    setSelectedLampiran(lampiran);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLampiran(null);
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <>
      {/* Modal for Lampiran */}
      {isModalOpen && (
        <div className='inset-0 flex justify-center items-center z-50 fixed bg-black bg-opacity-30 px-8 sm:px-8 md:px-8 xl:px-32' onContextMenu={(e) => e.preventDefault()}>
          <div className='bg-white p-8 rounded-lg shadow-sm w-full max-w-5xl min-w-sm FadeIn relative'>
            <button className='absolute top-[1%] shadow-md left-[99%] -translate-x-1/2 -translate-y-1/2  p-2 transition-all bg-white duration-500 hover:bg-red-500 hover:text-white rounded-md mb-4' onClick={closeModal}>
              <FaXmark />
            </button>
            <img className='bg-black w-full object-cover flex h-[250px] sm:h-[500px] md:h-[500px] lg:h-[500px] 2xl:h-[500px]' src={selectedLampiran} onContextMenu={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
      {/* End of Modal for Lampiran */}

      <section className='p-32 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-32 bg-orange-50' onContextMenu={(e) => e.preventDefault()}>
        <div className='flex flex-col gap-16 items-center sm:flex-col md:flex-col lg:flex-col xl:flex-row xl:items-start'>
          <div className='flex w-[300px] h-[360px] sm:w-[300px] sm:h-[360px] 2xl:w-[380px] 2xl:h-[460px] rounded-md overflow-clip shadow-md FadeIn flex-shrink-0'>
            <img className='w-full h-auto object-cover' src={MahasiswaPhoto[mahasiswa.Photo] || 'https://via.placeholder.com/150'} alt={mahasiswa.Nama} />
          </div>
          <div className='w-full'>
            <div>
              <h2>{mahasiswa.Nama}</h2>
              <div className='mt-4'>
                {mahasiswa.NIM ? (
                  <h4>NIM : {mahasiswa.NIM}</h4>
                ) : ('')}
                <h4>Angkatan : {mahasiswa.Angkatan}</h4>
              </div>
            </div>
            <br />
            <hr className='border-black' />
            <br />
            {(mahasiswa.judul) && (
              <div className='mb-4 flex flex-col gap-2'>
                <h3>Judul Proyek Akhir</h3>
                <p>{mahasiswa.judul}</p>
              </div>
            )}
            <h3>Abstrak</h3>
            {mahasiswa.abstrak ? (
              <>
                <p className='leading-[2.5rem] text-justify'>{mahasiswa.abstrak}</p>
              </>
            ) : (
              <div className='opacity-45'>Tidak ada Abstrak....</div>
            )}

            {mahasiswa.journalLink && (
              <button onClick={() => window.open(mahasiswa.journalLink, '_blank')} className='bg-orange-500 rounded-md shadow-md text-white p-4 mt-4 transition-all duration-500 hover:bg-orange-400'> Lihat Journal</button>
            )}

            {(mahasiswa.lampiran || mahasiswa.lampiran1 || mahasiswa.lampiran2) && (
              <div className='mt-8'>
                <h3>Lampiran</h3>
                <div className='grid grid-cols-1 gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  {mahasiswa.lampiran && (
                    <div onClick={() => openModal(mahasiswa.lampiran)} className=' cursor-pointer flex w-full min-w-56 max-w-96 h-full max-h-64 min-h-32 overflow-clip rounded-md shadow-md'>
                      <img className='object-cover w-full h-auto' src={mahasiswa.lampiran} />
                    </div>
                  )}
                  {mahasiswa.lampiran1 && (
                    <div onClick={() => openModal(mahasiswa.lampiran1)} className='cursor-pointer flex w-full min-w-56 max-w-96 h-[300px] max-h-64 min-h-32 overflow-clip rounded-md shadow-md'>
                      <img className='object-cover w-full h-auto' src={mahasiswa.lampiran1} />
                    </div>
                  )}
                  {mahasiswa.lampiran2 && (
                    <div onClick={() => openModal(mahasiswa.lampiran2)} className='cursor-pointer flex w-full min-w-56 max-w-96 h-full max-h-64 min-h-32 overflow-clip rounded-md shadow-md'>
                      <img className='object-cover w-full h-auto' src={mahasiswa.lampiran2} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default MahasiswaDetail