import React from 'react'

const CardVisiMisi = ({TextsTitle, button, }) => {
  return (
    <div className='my-32 flex gap-8 flex-col'>
    <button className='text-lg font-bold text-black'>
        {button}
    </button>
    <div className=''>
        {TextsTitle}
    </div>
    </div>
  )
}

export default CardVisiMisi