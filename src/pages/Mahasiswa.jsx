import React, { useState } from 'react'
import DataMahasiswa from '../DataMap/MahasiswaAlumni'
import { useNavigate } from 'react-router-dom'
import { FaChevronUp } from 'react-icons/fa6'

const Mahasiswa = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const Navigate = useNavigate();
  const [rows, setRows] = useState(1);

  const generateLink = (nama) => {
    return `/mahasiswa/${nama.replace(/\s+/g, '-').toLowerCase()}`
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filteredDataMahasiswa = DataMahasiswa.filter((mhs) =>
    mhs.Nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mhs.NIM.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handleSeeMore = () => {
    setRows(rows + 1);
  }

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <>
      <section onContextMenu={(e) => e.preventDefault()} className='p-32 px-4 pb-64 sm:px-8 md:px-12 lg:px-24 xl:px-32 bg-orange-100 relative'>
        <div className='flex justify-center mb-8'>
          <h2>MAHASISWA ALUMNI</h2>
        </div>
        <div className='flex justify-end mb-8'>
          <input onChange={handleSearchChange} value={searchQuery} type="text" className='px-4 py-2 bg-white focus:outline-none border-white shadow-md focus:border-orange-500 border rounded-md' placeholder='Cari Mahasiswa...' />
        </div>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {filteredDataMahasiswa.length > 0 ? (
          filteredDataMahasiswa.slice(0, rows * 12).map((mhs, index) => (
            <button onClick={() => Navigate(generateLink(mhs.Nama))} style={{ animationDelay: `${index * 0.2}s` }} key={index} className='FadeIn flex h-[450px] rounded-md overflow-clip relative CardMahasiswa shadow-lg shadow-orange-200'>
              <div className='bg-white border border-orange-500 text-black px-12 py-4 pb-12 shadow-lg absolute z-10 rounded-xl -bottom-40 -left-5 text-start transition-all duration-500 CardMahasiswaLabel'>
                <p className='font-bold mb-2'>{mhs.Nama}</p>
                <p>{mhs.NIM}</p>
              </div>
              <img className='transition-all duration-500 object-cover w-full h-full scale-110' src={mhs.Photo} />
            </button>
          ))
        ) : (
          <div className='col-span-4 text-center text-gray-500'>No Results Found</div>
        )
        }
        </div>
        {rows * 12 < filteredDataMahasiswa.length && (
          <div className='flex w-full justify-center mt-12'>
            <button onClick={handleSeeMore} className='bg-orange-500 text-white py-2 px-4 rounded-md transitioin-all duration-500 hover:bg-orange-400'>Lihat Lainnya</button>
          </div>
        )}
        <button onClick={handleClickTop} className='absolute -translate-x-1/2 -translate-y-1/2 -bottom-12 left-1/2 bg-orange-600 text-white rounded-full p-4 transition-all duration-300 hover:-bottom-10'><FaChevronUp /></button>
      </section>
    </>
  )
}

export default Mahasiswa