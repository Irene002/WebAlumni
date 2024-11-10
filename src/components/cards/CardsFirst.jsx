import React from 'react'

import { useNavigate } from 'react-router-dom'

const CardsFirst = ({Name, NIM, ImageCover, iconBtn1, iconBtn2, iconBtn3, ViewProfile, CardId}) => {
    const navigate = useNavigate()
    const loggerNavigate = (path) => {
        console.log(path)
        navigate(path)
    }


  return (
    <div className='Card1 p-4 py-8 bg-white rounded-xl shadow-md shadow-red-950 w-[30rem] max-w-96' id={CardId}>
                <div className='CardImage flex justify-center mb-4'>
                    <div className='rounded-full w-52 h-52 overflow-clip flex shadow-md shadow-orange-100'>
                    <img className='w-full h-auto object-cover' src={ImageCover}/>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                <h3>{Name}</h3>
                <p>{NIM}</p>
                <div className='flex flex-row justify-between gap-8 pt-4 text-white'>
                    <button onClick={() =>loggerNavigate()} className='bg-orange-400 p-4 rounded-full hover:bg-orange-300 transition-all duration-300'>
                    {iconBtn1}
                    </button>
                    <button className='bg-orange-400 p-4 rounded-full hover:bg-orange-300 transition-all duration-300'>
                    {iconBtn2}
                    </button>
                    <button onClick={() =>loggerNavigate(ViewProfile)} className='bg-orange-400 p-4 rounded-full hover:bg-orange-300 transition-all duration-300'>
                    {iconBtn3}
                    </button>
                </div>
                </div>
            </div>
  )
}

export default CardsFirst