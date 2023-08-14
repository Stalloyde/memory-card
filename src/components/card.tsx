import './card.css';

const Card = ({
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
    setIsGameOver(1);
  };

  const handleClick = (e) => {
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
    <div className='card' onClick={handleClick} id={id}>
      <>
        <img className='images' src={imageUrl} alt={`image-${id}`}></img>
      </>
      <p>{cardName}</p>
    </div>
  );
};

export default Card;
