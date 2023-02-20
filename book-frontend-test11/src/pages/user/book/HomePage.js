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

    return (
        <div>
           {books.map((book)=> <h2 key={book.id} book={book}>{book.author},{book.title}  </h2> )}
           <hr/>
           <Home book={books}/>
           <hr/>
           <input onChange={changeText} name="author" value={text}/>
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