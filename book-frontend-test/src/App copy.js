import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [time, setTime]=useState(1);

const changeTime=()=>{
  let newTime;

  if(time>12){
    newTime=1;
  }else{
    newTime=time+1;
  }

  setTime(newTime);
}

  return (
    <div className="App">
      <p>current time is {time}</p>
      <button onClick={changeTime}>update</button>
      
    </div>
  );
}

export default App;
