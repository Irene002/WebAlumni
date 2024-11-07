import React from 'react'
import MahasiswaContent from '../MahasiswaContent'
import image1 from '../../../assets/test.png'

const sean_adare = () => {
  return (
    <>
    <MahasiswaContent
    GambarMahasiswa={image1}
    NamaMahasiswa={'Sean Ishak Adare'}
    NIM={'NIM : 2205066'}
    JudulProyek={'The quick brown fox jumps over the lazy dog.'}
    AbstrakContent={'The quick brwon fox jumps over the lazy dog. This is an example of a very long description.'}
    />
    </>
  )
}

export default sean_adare