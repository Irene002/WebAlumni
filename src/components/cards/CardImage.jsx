import React from 'react'

import { FaArrowRight } from 'react-icons/fa6'

const CardImage = ({CardId,CardImage,CardName,CardNameSpan}) => {
    // id='CardSambutanImage'
  return (
    <div className='text-center w-80 flex items-center flex-col gap-8 relative overflow-clip' id={CardId}>
        <div className='overflow-clip flex h-96 rounded-2xl shadow-lg shadow-orange-950'>
        <img id='ImageHomeCard' className='w-full h-auto object-cover transition-all duration-500' src={CardImage} />
        </div>
            <div>
                <h3>{CardName}</h3>
                <h3>{CardNameSpan}</h3>
            </div>

            <button className='CardImageLabel cursor-pointer transition-all rounded-lg duration-500 opacity-0 flex flex-row gap-4 bg-[#FA812F] items-center py-4 w-[12rem] justify-center absolute top-[60%] left-[90%] -translate-x-[50%] -translat-y-[50%]'>
                <div className='IconBtn rotate-[-45deg] text-2xl text-white transition-all duration-500'><FaArrowRight/></div>
                    <p className='text-white'>Lihat Lengkap</p>
            </button>
    </div>
  )
}

export default CardImage