import React from 'react'
import { useParams } from 'react-router-dom'
import DataMahasiswa from '../DataMap/MahasiswaAlumni'

const MahasiswaDetail = () => {
  const { name } = useParams()
  const formattedName = name.replace(/-/g, ' ')
  const mahasiswa = DataMahasiswa.find(mhs => mhs.Nama.toLowerCase() === formattedName.toLowerCase())

  if (!mahasiswa) {
    return <div>Mahasiswa not found</div>
  }

  return (

    <>
      <section className='p-32 px-4 sm:px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-32 bg-orange-50' onContextMenu={(e) => e.preventDefault()}>
        <div className='flex flex-col gap-16 items-center sm:flex-col md:flex-col lg:flex-col xl:flex-row xl:items-start'>
          <div className='flex w-full max-w-[380px] min-w-[290px] h-[460px] rounded-md overflow-clip shadow-md FadeIn flex-shrink-0'>
            <img className='w-full h-auto object-cover' src={mahasiswa.Photo} alt="" />
          </div>
          <div className='w-full'>
            <div>
              <h2>{mahasiswa.Nama}</h2>
              <div className='mt-4'>
                <h4>NIM : {mahasiswa.NIM}</h4>
                <h4>Angkatan : {mahasiswa.Angkatan}</h4>
              </div>
            </div>
            <br />
            <hr className='border-black' />
            <br />
            <div className='mb-4 flex flex-col gap-2'>
              <h3>Judul Proyek</h3>
              <p>THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.</p>
            </div>
            <h3>Abstrak</h3>
            <p className='leading-[2.5rem] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates exercitationem perferendis reprehenderit incidunt recusandae totam minima, perspiciatis commodi voluptatum tenetur reiciendis ipsum asperiores saepe atque ad inventore quas aliquid officia iusto nobis facilis minus mollitia. Ipsum, voluptate omnis. Neque repellat rem dolores adipisci dolor deserunt illum eius, ab ducimus quas eaque amet consectetur impedit, explicabo labore itaque veritatis debitis alias minima enim atque! Saepe, adipisci esse. Temporibus sequi nam magni incidunt debitis quis ad, minima dolorem ipsam quam perspiciatis autem! Fuga odio sequi alias numquam quam voluptatem molestiae, atque perferendis blanditiis aliquid, labore eveniet maiores, aliquam iusto illo odit quasi dicta. Odit aliquid sed nobis omnis delectus dignissimos assumenda voluptates vel minus fuga quidem ad molestiae asperiores, nemo quisquam! Consequuntur minus rem ipsum eligendi non iure, unde a vitae. Reiciendis beatae doloremque id. Nulla impedit velit suscipit rem dolor ipsum nostrum, id, similique facilis sapiente tempora error, esse dignissimos nesciunt? Reiciendis molestias consequatur quasi cupiditate laboriosam culpa nihil eius quis vero natus maiores cumque suscipit quod, esse sit libero amet sapiente voluptas quos aspernatur placeat sint error? Illum voluptas ratione beatae, necessitatibus libero blanditiis quibusdam natus maiores totam, nam eaque perferendis, assumenda nisi illo numquam labore harum sequi aspernatur?</p>
            <button className='bg-orange-500 rounded-md shadow-md text-white p-4 mt-4 transition-all duration-500 hover:bg-orange-400'> Lihat Journal</button>

            {(mahasiswa.lampiran || mahasiswa.lampiran1 || mahasiswa.lampiran2) && (
              <div className='mt-8'>
                <h3>Lampiran</h3>
                <div className='grid grid-cols-1 gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  {mahasiswa.lampiran && (
                    <div className='flex w-full min-w-32 max-w-96 h-full max-h-64 min-h-32 overflow-clip rounded-md shadow-md'>
                      <img className='object-cover w-full h-auto' src={mahasiswa.lampiran} />
                    </div>
                  )}
                  {mahasiswa.lampiran1 && (
                    <div className='flex w-full min-w-32 max-w-96 h-full max-h-64 min-h-32 overflow-clip rounded-md shadow-md'>
                      <img className='object-cover w-full h-auto' src={mahasiswa.lampiran1} />
                    </div>
                  )}
                  {mahasiswa.lampiran2 && (
                    <div className='flex w-full min-w-32 max-w-96 h-full max-h-64 min-h-32 overflow-clip rounded-md shadow-md'>
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