import React, { useEffect, useState } from 'react';
import BookItem from '../../../components/BookItem';

const Home = () => {
   // const{author, title}=props;
   
   // console.log('books.props====>>>', props); //HomePage.js에 넘긴것 넘어옴.

    const [books, setBooks]=useState([]);

   // const {books }=props;

    useEffect(()=>{
        fetch("http://localhost:8080/book").then(res=>res.json()).then(res=>{
            setBooks(res);
        }); 
    },[]) 

   // {books.map((book)=>(<BookItem key={book.id} book={book}/>))}
    return (
        <div>
        

         {books.map((book)=> (<BookItem key={book.id} books={book}/>))}

        {/*{books.map((book)=> <h3 key={book.id}> author:{book.author}, title:{book.title} </h3>)} */} 

        </div>
    );
};

export default Home;