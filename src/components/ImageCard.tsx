import React from 'react';
import { useDispatch } from 'react-redux';

import { addLike, removeLike, removeCard } from '../slices/cardsReducer';
import { ImageCardProps } from '../utils/interfaces';
import activeLikeImg from '../assets/activeLike.png';
import inactiveLikeImg from '../assets/inactiveLike.png';
import trashImg from '../assets/trash.png';

const ImageCard = (props: ImageCardProps) => {
  const {
    id, title, url, hasLike,
  } = props;

  const dispatch = useDispatch();

  return (
    <div className="gallery__card">
      <img
        className="gallery__card__artwork"
        src={url}
        alt="pic"
      />
      <p className="gallery__card__title">{title}</p>
      <div className="gallery__card__controls">
        <button
          type="button"
          className="gallery__card__controls__btn"
          onClick={
            hasLike
              ? () => dispatch(removeLike({ cardId: id }))
              : () => dispatch(addLike({ cardId: id }))
          }
        >
          <img
            src={hasLike ? activeLikeImg : inactiveLikeImg}
            alt="like"
          />
        </button>
        <button
          type="button"
          className="gallery__card__controls__btn"
          onClick={() => dispatch(removeCard({ cardId: id }))}
        >
          <img src={trashImg} alt="delete" />
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
