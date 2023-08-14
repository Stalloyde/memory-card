import { useState, useEffect } from 'react';
import Card from './components/card';
import * as uniqid from 'uniqid';
import './App.css';
import obiWanKenobi from './Images/obiWanKenobi.jpeg';
import aaylaSecura from './Images/aaylaSecura.webp';
import ahsokaTano from './Images/ahsokaTano.jpeg';
import anakinSkywalker from './Images/anakinSkywalker.webp';
import countDooku from './Images/countDooku.jpg';
import generalGrievous from './Images/generalGrievous.jpg';
import darthVader from './Images/darthVader.webp';
import leiaSkywalker from './Images/leiaSkywalker.webp';
import lukeSkywalker from './Images/lukeSkywalker.jpg';
import quiGonJinn from './Images/quiGonJinn.png';
import rey from './Images/rey.webp';
import emperorPalpatine from './Images/emperorPalpatine.png';

const App = () => {
  interface characterCardsType {
    name: string;
    id: any;
    isClick: boolean;
    imageUrl: string;
  }

  const [currentScore, setCurrentScore] = useState<number>(0);
  const [highScore, setHighScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isWin, setIsWin] = useState<boolean>(false);
  const [characterCards, setCharacterCards] = useState<
    characterCardsType[] | Record<any, never>[]
  >([
    {
      name: 'Obi Wan Kenobi',
      id: uniqid(),
      isClick: false,
      imageUrl: obiWanKenobi,
    },
    {
      name: 'Aayla Secura',
      id: uniqid(),
      isClick: false,
      imageUrl: aaylaSecura,
    },
    {
      name: 'Ahsoka Tano',
      id: uniqid(),
      isClick: false,
      imageUrl: ahsokaTano,
    },
    {
      name: 'Anakin Skywalker',
      id: uniqid(),
      isClick: false,
      imageUrl: anakinSkywalker,
    },
    {
      name: 'Count Dooku',
      id: uniqid(),
      isClick: false,
      imageUrl: countDooku,
    },
    {
      name: 'General Grievous',
      id: uniqid(),
      isClick: false,
      imageUrl: generalGrievous,
    },
    {
      name: 'Darth Vader',
      id: uniqid(),
      isClick: false,
      imageUrl: darthVader,
    },
    {
      name: 'Leia Skywalker',
      id: uniqid(),
      isClick: false,
      imageUrl: leiaSkywalker,
    },
    {
      name: 'Luke Skywalker',
      id: uniqid(),
      isClick: false,
      imageUrl: lukeSkywalker,
    },
    {
      name: 'Qui Gon Jinn',
      id: uniqid(),
      isClick: false,
      imageUrl: quiGonJinn,
    },
    {
      name: 'Rey',
      id: uniqid(),
      isClick: false,
      imageUrl: rey,
    },
    {
      name: 'Emperor Palpatine',
      id: uniqid(),
      isClick: false,
      imageUrl: emperorPalpatine,
    },
  ]);

  function shuffle(array: {}[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffleCharacterCards = () => {
    const copyCharacterCards = [...characterCards];
    const updatedCharacterCards = shuffle(copyCharacterCards);
    setCharacterCards(updatedCharacterCards);
  };

  useEffect(() => {
    shuffleCharacterCards();
  }, [currentScore]);

  useEffect(() => {
    currentScore > 11 ? setIsWin(true) : setIsWin(false);
  }, [currentScore]);

  const handleClick = () => {
    const updatedCharacterCards = characterCards.map((item) => ({
      name: item.name,
      id: item.id,
      isClick: false,
      imageUrl: item.imageUrl,
    }));

    setCharacterCards(updatedCharacterCards);
    setCurrentScore(0);
    setHighScore(highScore);
    setIsWin(false);
    setIsGameOver(false);
    setCurrentScore(0);
  };

  return (
    <div className='container'>
      <div className='header-container'>
        <div className='title'>
          <h1>Star Wars Memory Game</h1>
          <p>
            Get points for picking cards that you haven't picked before. Get 12
            points to win!
          </p>
        </div>
        <div className='scoreboard'>
          <div>Current Score: {currentScore}</div>
          <div>High Score: {highScore}</div>
        </div>
      </div>

      <div className='content-container'>
        {isWin ? (
          <>
            <div className='win-modal'>
              <h2>You win!</h2>
              <button onClick={handleClick}>New Game</button>
            </div>
          </>
        ) : isGameOver ? (
          <>
            <div className='gameover-modal'>
              <h2>Try Again!</h2>
              <button onClick={handleClick}>New Game</button>
            </div>
          </>
        ) : (
          <>
            {characterCards.map((key) => (
              <Card
                key={key.id}
                id={key.id}
                cardName={key.name}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                highScore={highScore}
                setHighScore={setHighScore}
                setIsGameOver={setIsGameOver}
                characterCards={characterCards}
                setCharacterCards={setCharacterCards}
                imageUrl={key.imageUrl}
              ></Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
