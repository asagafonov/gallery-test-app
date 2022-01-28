import React from 'react';
import { useDispatch } from 'react-redux';

import { addLike, removeLike, removeCard } from '../slices/cardsReducer';
import { ImageCardProps } from '../utils/interfaces';

const ImageCard = (props: ImageCardProps) => {
  const {
    id, title, url, hasLike,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className="gallery__card">
      <img
        src={url}
        alt="pic"
      />
      <p>{title}</p>
      <div className="gallery__card__controls">
        <button
          type="button"
          className="gallery__card__controls__like-btn"
          onClick={
            hasLike
              ? () => dispatch(removeLike({ cardId: id }))
              : () => dispatch(addLike({ cardId: id }))
          }
        >
          {
            hasLike
              ? 'I have like'
              : 'I have no like'
          }
        </button>
        <button
          type="button"
          className="gallery__card__controls__remove-btn"
          onClick={() => dispatch(removeCard({ cardId: id }))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
