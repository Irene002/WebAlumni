import React, { useState } from 'react';
import CardRow from '../components/cards/CardRow';
import cardData from '../components/cards/cardData/CardDataMahasiswa';

const Mahasiswa = () => {
  const [rowsToShow, setRowsToShow] = useState(1);
  const cardsPerRow = 4;

  const handleLoadMore = () => {
    setRowsToShow(rowsToShow + 2); 
  };

  const totalRows = Math.ceil(cardData.length / cardsPerRow);

  return (
    <section className='mt-24 px-24 mb-32'>
      <h2 className='grid justify-center py-8'>MAHASISWA ALUMNI</h2>

      {[...Array(rowsToShow)].map((_, rowIndex) => (
        <div key={rowIndex} className='py-8'>
          <CardRow 
            cards={cardData.slice(rowIndex * cardsPerRow, (rowIndex + 1) * cardsPerRow)}
          />
        </div>
      ))}

      {rowsToShow < totalRows && (
        <div className='flex justify-center mt-12'>
          <button
            className='underline text-orange-500 hover:text-orange-400 transition-all duration-300'
            onClick={handleLoadMore}
          > Lihat Lainnya
          </button>
        </div>
      )}
    </section>
  );
};

export default Mahasiswa;
