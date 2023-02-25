import React, { useEffect, useState } from 'react';
import BookItem from '../../../components/BookItem';
import Home from './Home';

const HomePage = () => {
    const [books, setBooks]=useState([]);
    const [text, setText]=useState('');
    const [inputs, setInputs]=useState({
        name:'',
        nickname:''
    })

    const {author, title}=inputs;

    const changeText=(e)=>{
        let addText='';
        console.log('e.target.value.length===>', e.target.value.length);
        console.log('e.target===>', e.target);
        console.log('e===>', e);

            if(e.target.value.length>5){
            addText='You are great!!';
            alert(addText);
        } else{
            setText(e.target.value);
        }
   
    }

    // const onChange1=(e)=>{
    //     const {value, name}=e.target; //e.targe에서 author와 value 각각 추출.

    //     setInputs({
    //         ...inputs,
    //         [name]:value
    //     })
    // }

    // const sendServer=(e)=>{
    //     console.log('sendServer.e', e);
    // }

    useEffect(()=>{  
      fetch("http://localhost:8080/book",{method:"GET"}).then(res=>res.json()).then(res=>{
          console.log('res====>>',res);
          console.log('res[0]===>', res[0].title)
          setBooks(res);
      }); 
   },[]) 

//  {books.map((book)=><h1>author:{book.author}, title: {book.title}</h1> )}
// {books.map(book=><h1>author:{book.author}, title: {book.title}</h1> )} book에 ()없어도 됨.
//  key={book.id} book={book} 이것은 <h2 태그 안에 넣어야.
// <Home books={books}/> 데이터를 넘길때, 뒤에 books는 setState의 books이고, 그것을 books라는 키로 넘기는 것라, book이라 하면 안됨.
// Home.js에서 books로 받고 있으므로.

    return (
        <div>
           {/*{books.map((book)=> <h2 key={book.id} book={book}> author:{book.author},title: {book.title}  </h2> )}*/}
           <hr/>

            {/*//Home.js로 데이터 날리기
        <Home boards={boards} setBoards={setBoards} user={user} number={number} addNumber={addNumber}/> */}
            
            <Home books={books}/>
             

           <hr/>
           <input onChange={changeText} name="author" value={text} text={text}/>
            <b> Your text={text}</b>
            <hr/>
            {/* <input placeholder='저자' name="name" onChange={onChange1} value={name}/>
            <input placeholder='제목' name="nickname" onChange={onChange1} value={nickname} />
            <button onClick={sendServer}>submit</button>
            {name}, {nickname}  */}


        </div>
    );
};

export default HomePage;