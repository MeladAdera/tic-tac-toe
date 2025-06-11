import './App.css';
import { useState } from 'react';
import Sqr from './components/Sqr';
function App() {
  const [sqrs,setSqrs]= useState(["","","","","","","","",""])


  return (
<div className='container'>
<div className="gameboard">


 {sqrs.map((sq,index) =>(
 <Sqr key={index} />
 ))}
   </div>
</div>
  );
}

export default App
