import React, { useEffect, useState } from 'react';
import BookItem from '../../../components/BookItem';

const Home = () => {
   // 여기 예제에서는 Home.js에서 서버에서 다운 받고 ,그것을 BookItem.js로 넘겨주는 것.

   // const{author, title}=props;
   
   // console.log('books.props====>>>', props); //HomePage.js에 넘긴것 넘어옴.

    const [books, setBooks]=useState([]);
 //   const [reply, setReply]=useState([]);

   // const {books }=props;

    useEffect(()=>{ //책 리스트 모두 불러오는 것.
        fetch("http://localhost:8080/book")
        .then(res=>{res.json()
        console.log('res===>>',res);
        })
        .then(res=>{
            setBooks(res);
          //  setReply(res);
        }); 
    },[]) 

   // {books.map((book)=>(<BookItem key={book.id} books={book}/>))} 돌리는 것이 <BookItem 태그 안에 있어야.
   // books={book}/> book이라는 매개변수를 books에 담아서 보내는 것이라, 다른데서 props은 books을 가진다. book이 아니라,



    return (
        <div>        

         {books && books.map((book)=> (<BookItem key={book.id} books={book}/>))}

        {/*{books.map((book)=> <h3 key={book.id}> author:{book.author}, title:{book.title} </h3>)} */} 

        </div>
    );
};

export default Home;