import React, { useEffect, useState } from 'react';
import BookItem from '../../../components/BookItem';

const Home = () => {
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

    return (
        <div>
          <h1>haha</h1>  

            {books.map((book)=><h2> key={book.id} book={book}</h2> )}
        </div>
    );
};

export default Home;