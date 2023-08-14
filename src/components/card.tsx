import './card.css';
import { characterCardsType } from '../App';
import * as React from 'react';

interface CardInputProps {
  currentScore: number;
  setCurrentScore: React.Dispatch<React.SetStateAction<number>>;
  highScore: number;
  setHighScore: React.Dispatch<React.SetStateAction<number>>;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  characterCards: characterCardsType[] | Record<any, never>[];
  setCharacterCards: React.Dispatch<
    React.SetStateAction<Record<any, never>[] | characterCardsType[]>
  >;
  id: any;
  cardName: string;
  imageUrl: string;
}

const Card: React.FC<CardInputProps> = ({
  currentScore,
  setCurrentScore,
  highScore,
  setHighScore,
  setIsGameOver,
  characterCards,
  setCharacterCards,
  id,
  cardName,
  imageUrl,
}) => {
  const incrementScore = () => {
    setCurrentScore(currentScore + 1);

    currentScore >= highScore
      ? setHighScore(currentScore + 1)
      : setHighScore(highScore);
  };

  const gameOver = () => {
    setIsGameOver(true);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentTarget = e.currentTarget.id;

    const updatedCharacterCards = characterCards.map((item) =>
      currentTarget === item.id
        ? {
            name: item.name,
            id: item.id,
            isClick: true,
            imageUrl: item.imageUrl,
          }
        : {
            name: item.name,
            id: item.id,
            isClick: item.isClick,
            imageUrl: item.imageUrl,
          }
    );
    setCharacterCards(updatedCharacterCards);
    characterCards.map((item) => {
      if (currentTarget === item.id && !item.isClick) {
        incrementScore();
      }

      if (currentTarget === item.id && item.isClick) {
        gameOver();
      }
    });
  };

  return (
    <article className='card' onClick={handleClick} id={id}>
      <>
        <img className='images' src={imageUrl} alt={`image-${id}`}></img>
      </>
      <p>{cardName}</p>
    </article>
  );
};

export default Card;
