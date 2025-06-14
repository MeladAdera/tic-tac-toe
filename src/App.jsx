import './App.css';
import { useState } from 'react';
import Sqr from './components/Sqr';

function App() {
  const [sqrs, _setSqrs] = useState(new Array(9).fill(''));
  const [go, _setGo] = useState('x');

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
          />
        ))}
      </div>
      <div>{`its now ${go} turn!`} </div>
    </div>
  );
}

export default App;