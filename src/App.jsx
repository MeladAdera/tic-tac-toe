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
  useEffect(()=>{
    winningcom.forEach((c) =>{
const Owins =c.every((sqr=>sqrs[sqr]==="o"));
const Xwins =c.every((sqr=>sqrs[sqr]==="x"));


if(Owins){
  setWinningMessage("O wins")

}
else if(Xwins){
  setWinningMessage("X wins")
}

    });
  },[sqrs, winningMessage]);
  if (sqrs.every(sqr => sqr !== '') && !winningMessage) {
    setWinningMessage("It's a draw!");
  }
  

  return (
    <div className='container'>
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
          />
        ))}
      </div>
      <div>{winningMessage}</div>
   { !winningMessage && <div className='message'>{`its now ${go} turn!`} </div>}
    </div>
  );
}

export default App;