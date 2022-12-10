import React from 'react';

export const Card = ({ title, content, img }) => {
  return (
    <div className='card'>
      {img}
      <span className='cardTitle'>{title}</span>
      <p className='cardContent'>{content} </p>
    </div>
  );
};
