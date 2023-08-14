import './header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='title'>
        <h1>Memory Card Game</h1>
        <p>
          Get points for picking a card that you haven't picked before. Game
          ends when you pick a previously picked card.
        </p>
      </div>
      <div className='scoreboard'>
        <div>Current Score: 0</div>
        <div>High Score: 0</div>
      </div>
    </div>
  );
};

export default Header;
