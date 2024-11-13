import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProfilMahasiswa = ({cardMahasiswa, BtnLeft, BtnMid, BtnRight}) => {
    const navigate = useNavigate();

  return (
    <>
    <div className='CardContainer p-4 py-8 bg-white rounded-xl shadow-md shadow-red-950 w-[30rem] max-w-96 animate-slide-up'>
        <div className='flex flex-col items-center mb-4'>
            <div className='ProfileImage rounded-full w-52 h-52 overflow-clip flex shadow-md bg-gray-600 shadow-orange-100'> 
                <img className='transition-all duration-500 w-full h-auto object-cover pointer-events-none' src={cardMahasiswa.ProfileImage} />
            </div>
            <div className='flex flex-col gap-2 items-center text-center mt-4'>
                <h3>{cardMahasiswa.nama}</h3>
                <p>NIM : {cardMahasiswa.Nim}</p>
                <div className='flex flex-row justify-between gap-8 pt-4 text-white'>
                    <button className='rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-500 p-4 text-center' onClick={() => navigate(cardMahasiswa.urlSoc1)}> {BtnLeft}
                    </button>

                    <button className='rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-500 p-4 text-center' onClick={() => navigate(cardMahasiswa.urlSoc2)}> {BtnMid}
                    </button>

                    <button className='rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-500 cursor-pointer p-4 text-center' onClick={() => navigate(cardMahasiswa.url)}> {BtnRight}
                    </button>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}

export default CardProfilMahasiswa