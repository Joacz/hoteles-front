import React from 'react';

export const Gallery = ({ imgs }) => {
  return (
    <div className='galleryContainer'>
      <div className='galleryRow'>
        {imgs.map((img) => (
          <div key={img}>
            <span className='imgTitle'></span>
            <img src={img} alt='' />
          </div>
        ))}
      </div>
    </div>
  );
};
