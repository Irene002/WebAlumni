import React from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ButtonScrollToTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  return (
    <button onClick={handleScrollToTop} className='ScrollBtn p-4 rounded-full text-white text-3xl relative top-6 transition-all duration-300 hover:top-5'><FaArrowUp/></button>
  )
}

export default ButtonScrollToTop