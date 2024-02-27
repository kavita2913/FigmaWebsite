import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating); // Get the whole number part of the rating
  const remainder = rating - filledStars; // Get the decimal part for partial star

  const renderStars = (count, color) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<span key={i} className='star-filled' style={{ color }}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className='star-rating'>
      {renderStars(filledStars, 'gold')}
      {remainder > 0 && (
        <span className='star-filled' style={{ width: `${remainder * 100}%`, color: 'gold', position: 'relative' }}>
          <span className='star-filled' style={{ position: 'absolute', left: 0, width: '50%', overflow: 'hidden' }}>&#9733;</span>
          <span className='star-unfilled' style={{ position: 'absolute', left: '50%', width: '50%', overflow: 'hidden' }}>&#9733;</span>
        </span>
      )}
    </div>
  );
};

export default StarRating;
