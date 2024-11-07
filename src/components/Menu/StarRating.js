import React from 'react';
import './StarRating.css';

function StarRating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <div style={{ display: 'flex' }}>
      {[...Array(totalStars)].map((_, index) => {
        if (index < filledStars) {
          // Full star
          return (
            <span key={index} className="full-star">
              ★
            </span>
          );
        } else if (index === filledStars && hasHalfStar) {
          // Half star
          return (
            <span key={index} className="half-star">
              ★
            </span>
          );
        } else {
          // Empty star
          return (
            <span key={index} className="empty-star">
              ★
            </span>
          );
        }
      })}
    </div>
  );
}

export default StarRating;