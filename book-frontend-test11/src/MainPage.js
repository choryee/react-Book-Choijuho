import React, { useEffect, useState } from 'react';
//import BookItem from '../../../components/BookItem';


//230219
// 리액트 한글 강의
// https://react.vlpt.us/basic/08-manage-input.html

const MainPage = () => {

    const [books, setBooks]=useState([]);
    const [text, setText]=useState('');

    useEffect(()=>{
  
      fetch("http://localhost:8080/book",{method:"GET"}).then(res=>res.json()).then(res=>{
          console.log('res====>>',res);
          console.log('res[0]===>', res[0].title)

          setBooks(res);
      }); 
   },[]) 

   const onChange=(e)=>{
    setText(e.target.value);
   }

//  {books.map((book)=><h1>author:{book.author}, title: {book.title}</h1> )}
// {books.map(book=><h1>author:{book.author}, title: {book.title}</h1> )} book에 ()없어도 됨.
console.log('author==>', )

    return (
        <div>
          
            {books.map((book)=><h2> {book.author}</h2> )}
            <hr/>
            author: <input onChange={onChange} value={text}/>
            <b>author is... {text}</b>

        </div>
    );
};

export default MainPage;