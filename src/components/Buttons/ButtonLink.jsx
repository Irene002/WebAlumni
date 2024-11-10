import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonLink = ({path,linkLabel}) => {
    const navigate = useNavigate()
    const loggerNavigate = (path) => {
        console.log(path)
        navigate(path)
    }
  return (
    <button onClick={() =>loggerNavigate(path)} className='underline text-orange-500 hover:text-orange-400 transition-all duration-300'>{linkLabel}</button>
  )
}

export default ButtonLink