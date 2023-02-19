import React, { useEffect, useState } from 'react';
//import BookItem from '../../../components/BookItem';

const App = () => {

    const [books, setBooks]=useState([]);

    useEffect(()=>{
  
      fetch("http://localhost:8080/book",{method:"GET"}).then(res=>res.json()).then(res=>{
          console.log('res====>>',res);
          console.log('res[0]===>', res[0].title)

          setBooks(res);
      }); 
   },[]) 

//  {books.map((book)=><h1>author:{book.author}, title: {book.title}</h1> )}
// {books.map(book=><h1>author:{book.author}, title: {book.title}</h1> )} book에 ()없어도 됨.
console.log('author==>', )

    return (
        <div>
          
            {books.map((book)=><h2> {book.author}</h2> )}
            <hr/>
            author: <input type="text" id="author"/>
            title: <input type="text" id="title"/>

        </div>
    );
};

export default App;