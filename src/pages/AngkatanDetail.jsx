import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { FaChevronUp, FaMagnifyingGlass } from 'react-icons/fa6'

// Data Mahasiswa
import DataMahasiswa2022 from '../DataMap/MahasiswaAlumni';
import { DataMahasiswa2021 } from '../DataMap/MahasiswaAlumni';
import { DataMahasiswa2020 } from '../DataMap/MahasiswaAlumni';
import { DataMahasiswa2019 } from '../DataMap/MahasiswaAlumni';

const AngkatanDetail = () => {
  const {angkatan} = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const Navigate = useNavigate();
  const [rows, setRows] = useState(1);

  const generateLink = (angkatan, nama) => {
    return `/mahasiswa/${angkatan}/${nama.replace(/\s+/g, '-').toLowerCase()}`
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const DataSeluruhMahasiswa = [
    ...DataMahasiswa2022, 
    ...DataMahasiswa2021, 
    ...DataMahasiswa2020, 
    ...DataMahasiswa2019
  ];

  const filteredDataMahasiswa = DataSeluruhMahasiswa.filter(
    (mhs) =>
      mhs.Angkatan === angkatan && (
        mhs.Nama?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mhs.NIM?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mhs.Alias?.toLowerCase().includes(searchQuery.toLowerCase()))
  );


  const handleSeeMore = () => {
    setRows(rows + 1);
  }

  const handleClickTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <>
      <section onContextMenu={(e) => e.preventDefault()} className='p-32 px-4 pb-64 sm:px-8 md:px-12 lg:px-24 2xl:px-32 bg-orange-100 relative'>
        <div className='flex justify-center mb-8 text-center'>
          <h2>MAHASISWA ALUMNI ANGKATAN {angkatan}</h2>
        </div>
        <div className='flex flex-col items-center gap-4 mb-12 lg:flex-row lg:justify-between'>
          <div>
            <p>Terdapat  <span className='font-bold'> {filteredDataMahasiswa.length} </span> Mahasiswa Alumni
            </p>
          </div>
          <div className='relative'>
            <FaMagnifyingGlass className='absolute left-6 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-500' />
            <input onChange={handleSearchChange} value={searchQuery} type="text" className='focus:outline-orange-500 p-4 rounded-md shadow-md  pl-12 transition-all duration-500 w-[300px] sm:w-[400px] lg:w-[250px] lg:focus:w-[400px]' placeholder='Nama / NIM' />
          </div>
        </div>
        <div className='flex justify-center md:block xl:block'>
          <div className='grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            {filteredDataMahasiswa.length > 0 ? (
              filteredDataMahasiswa.slice(0, rows * 12).map((mhs, index) => (
                <button onClick={() => Navigate(generateLink(mhs.Angkatan, mhs.Nama))} style={{ animationDelay: `${index * 0.2}s` }} key={index} className='FadeIn flex flex-shrink-0 h-[450px] w-full max-w-[390px] min-w-[290px] rounded-md overflow-clip relative CardMahasiswa shadow-lg shadow-orange-200'>
                  <div className='bg-white border border-orange-500 text-black px-12 py-4 pb-12 shadow-lg absolute z-10 rounded-xl -bottom-40 -left-5 text-start transition-all duration-500 CardMahasiswaLabel'>
                    <p className='font-bold mb-2'>{mhs.Nama}</p>
                    <p>{mhs.NIM}</p>
                  </div>
                  <img className='transition-all duration-500 object-cover w-full h-full scale-110' src={mhs.Photo || 'https://via.placeholder.com/150'} alt={mhs.Nama} />
                </button>
              ))
            ) : (
              <div className='col-span-4 text-center text-gray-500 h-screen'>Tidak ada mahasiswa ditemukan untuk Angkatan {angkatan}</div>
            )
            }
          </div>
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

export default AngkatanDetail