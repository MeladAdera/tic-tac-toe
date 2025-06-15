import './App.css';
import { useEffect, useState } from 'react';
import Sqr from './components/Sqr';
const winningcom= [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

]

function App() {
  const [sqrs, _setSqrs] = useState(new Array(9).fill(''));
  const [go, _setGo] = useState('x');
  const [winningMessage,setWinningMessage]= useState("");
  const [playerx,_setplayerx]=useState("");
  const [playero,_setplayero]=useState("");
  const [showNameInput, setShowNameInput] = useState(true); 
  
  useEffect(() => {
    // التحقق من الفائز
    winningcom.forEach((c) => {
      const Owins = c.every((sqr) => sqrs[sqr] === "o");
      const Xwins = c.every((sqr) => sqrs[sqr] === "x");

      if (Owins) {
        setWinningMessage(`${playero} wins`);
      } else if (Xwins) {
        setWinningMessage(`${playerx} wins`);
      }
    });
    // حالة التعادل
    if (sqrs.every(sqr => sqr !== '') && !winningMessage) {
      setWinningMessage("It's a draw!");
    }
  }, [sqrs, winningMessage, playero, playerx]);

  // معالجة تغير أسماء اللاعبين
  const handlePlayerXChange = (e) => {
    _setplayerx(e.target.value);
  };

  const handlePlayerOChange = (e) => {
    _setplayero(e.target.value);
  };

  // التعامل مع نقرة على مربع
  const handleSquareClick = (index) => {
    if (sqrs[index] !== '' || winningMessage) return;

    const newSqrs = [...sqrs];
    newSqrs[index] = go;
    _setSqrs(newSqrs);
    _setGo(go === 'x' ? 'o' : 'x');
  };

  // إخفاء واجهة الإدخال بعد إدخال الأسماء
  const handleStartGame = () => {
    setShowNameInput(false);
  };

  return (
    <div className='container'>
      <h1>Tic-Tac-Toe</h1>
      
      {showNameInput ? (
        <div className="player-setup">
          <h2>Enter Player Names</h2>
          <div className="input-group">
            <label>Player X:</label>
            <input
              type='text'
              placeholder='Enter name for X'
              value={playerx}
              onChange={handlePlayerXChange}
            />
          </div>
          <div className="input-group">
            <label>Player O:</label>
            <input
              type='text'
              placeholder='Enter name for O'
              value={playero}
              onChange={handlePlayerOChange}
            />
          </div>
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      ) : (
        <>
          <div className="gameboard">
            {sqrs.map((sq, index) => (
              <Sqr
                key={index}
                index={index}
                sqrs={sqrs}
                setSqrs={_setSqrs}
                go={go}
                setGo={_setGo}
                winningMessage={winningMessage}
                handleSquareClick={handleSquareClick}
              />
            ))}
          </div>
          <div>{winningMessage}</div>
          {!winningMessage && <div className='message'>{`It is now ${go} turn!`}</div>}
        </>
      )}
    </div>
  );
}

export default App;