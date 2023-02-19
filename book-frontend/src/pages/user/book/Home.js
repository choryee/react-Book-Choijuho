import React, { useEffect, useState } from 'react';
import BookItem from '../../../components/BookItem';



const Home = () => {


 //29강.11'00
 const[books, setBooks]=useState([]);

 //함수 실행시 최초에 한번 실행되는 것
 useEffect(()=>{//비동기함수로 테이터 요청하는 것. 29강
    //,{method:"GET"}는 디폴트가 GET라 생략가능.
    //then(promise) res=>res.json() 서버에서 받은 것을 json으로 파싱하는 것.
    //마지막 .then()에는 최종 실할 것.

    //fecth("주소", {method: ""}).then(promise)
    fetch("http://localhost:8080/book",{method:"GET"}).then(res=>res.json()).then(res=>{
        console.log('res====>>',res);
        console.log('res[0]===>', res[0].title)
        setBooks(res);
    }); 
 },[]) //[]이 의존성 빈 것이지 않으면, 무한 실행됨.29강 마지막

 //밑 react에서는 key를 보고, 변경감지해서, key설정해줘야.
 //밑. books갯수 만큼 <BookItem>를 뿌리겠다는 것.
 //밑. books갯수 만큼 순회할때 마다, book를 넘김.24'45
    return (
        <div>
            {books.map((book)=>(
               <BookItem key={book.id} book={book}/>
            ))}
            
        </div>
    );
}

export default Home;