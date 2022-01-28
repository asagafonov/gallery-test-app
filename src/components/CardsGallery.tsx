import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { getItemsURL } from '../utils/urls';
import { setCardsData } from '../slices/cardsReducer';
import { RootState } from '../slices/index';
import { Card } from '../utils/interfaces';
import ImageCard from './ImageCard';
import spinnerImg from '../assets/spinner.png';

const CardsGallery = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    axios.get(getItemsURL)
      .then((response) => {
        const { data } = response.data;
        dispatch(setCardsData({ data }));
      })
      .catch((e) => {
        setError(e.message);
        throw new Error(e.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const { cards, filterIsOn } = useSelector((state: RootState) => state.cardsContainer);

  const filteredCards = filterIsOn
    ? cards.filter((card: Card): boolean => card.hasLike)
    : cards;

  if (error) {
    return (
      <div className="gallery__error-message">
        Error. Try refreshing the page
      </div>
    );
  }

  return (
    isLoading
      ? (
        <div className="gallery__loading">
          <img
            className="gallery__loading__spinner"
            src={spinnerImg}
            alt="spinner"
          />
          Loading
        </div>
      )
      : (
        <>
          <p className="gallery__count">
            showing
            {' '}
            <span className="gallery__count_bold">
              {filteredCards.length}
            </span>
            {' '}
            {filteredCards.length === 1 ? 'item' : 'items'}
          </p>
          <div className="gallery">
            {
              filteredCards.map((card: Card) => {
                const {
                  id, title, url, hasLike,
                } = card;

                return (
                  <ImageCard
                    id={id}
                    title={title}
                    url={url}
                    hasLike={hasLike}
                    key={id}
                  />
                );
              })
            }
          </div>
        </>
      )
  );
};

export default CardsGallery;
