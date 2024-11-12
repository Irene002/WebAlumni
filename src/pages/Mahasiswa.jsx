import React, { useState } from 'react';
import cardDataMahasiswa from '../components/cards/cardData/CardDataMahasiswa';
import CardProfilMahasiswa from '../components/cards/CardProfilMahasiswa';

import {FaInstagram, FaArrowRight, FaFacebook} from 'react-icons/fa6'

const Mahasiswa = () => {

  const [MahasiswaCardRows, setMahasiswaCardRows] = useState(1);
  const MahasiswaCardsPerRow = 4;

  const showMoreCards = () => {
    setMahasiswaCardRows(prevRowsVisible => prevRowsVisible + 2);

  };

  const visibleCards = cardDataMahasiswa.slice(0, MahasiswaCardRows * MahasiswaCardsPerRow)

  return (
    <section className='mt-24 px-24 mb-32'>
      <h2 className='grid justify-center py-2 text-center'>MAHASISWA ALUMNI</h2>

        <div className='py-8 flex-wrap flex gap-8 justify-center'>
          {/* Card */}

          {visibleCards.map((card, index) =>(
            <CardProfilMahasiswa
            key={index}
            cardMahasiswa={card}
            BtnLeft={<FaInstagram size={25}/>}
            BtnMid={<FaFacebook size={25}/>}
            BtnRight={<FaArrowRight size={25}/>}
            />
          ))}



        </div>

        <div className='flex justify-center mt-12'>
          {visibleCards.length < cardDataMahasiswa.length && (
          <button
            className='underline text-orange-500 hover:text-orange-400 transition-all duration-300'
            onClick={showMoreCards}
          > Lihat Lainnya
          </button>
          )}
        </div>
    </section>
  );
};

export default Mahasiswa;
