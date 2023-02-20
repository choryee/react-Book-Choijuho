import React, { useEffect, useState } from 'react';
import MainPage from './MainPage';
import Home2 from './pages/user/book/Home2';
import Home from './pages/user/book/Home';
import HomePage from './pages/user/book/HomePage';
//import BookItem from '../../../components/BookItem';

const App = () => {


//  {books.map((book)=><h1>author:{book.author}, title: {book.title}</h1> )}
// {books.map(book=><h1>author:{book.author}, title: {book.title}</h1> )} book에 ()없어도 됨.
//console.log('author==>', )

    return (
        <div>
          <HomePage/>
          <Home2/>
          
        
          
        </div>
    );
};

export default App;