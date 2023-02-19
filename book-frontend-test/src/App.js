import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [books, setBooks]=useState([{id:0, name:"choi"}]);

 

const downLoad=()=>{
 const books11=[
    {id:1, name:"kim"},
    {id:2, name:"lee"},
    {id:3, name:"park"}
]

setBooks([{...books, books11}])
}

return (
    <div>
      <button onClick={downLoad}>download here</button>
       {books.map((b)=>(<h5>{b.id} {b.name}</h5>))}
        
    </div>
  );
}

export default App;
