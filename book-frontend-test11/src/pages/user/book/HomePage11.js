import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/home/Home';


//11강.
const HomePage = () => {
    //HomePage는 일종의 부모
    //HomePage는 컴포넌트들(이것 일종의 자식. Header.js Home.js Footer.js)를 들고 있게하라.
    //그리고 데이터는 HomePage에서 받지, 위 컴포넌트에서 받지 마라.
    //http로 데이터 요청 방법(jQuery의 ajax, JS의 fetch, axios)

    const[boards,setBoards]=useState([]);
    const[number, setNumber]=useState(0);
    const[user, setUser]=useState([]); //12강 첨.

    const addNumber=()=>{
        setNumber(number+1);
    }

    useEffect(()=>{
       //다운로드 받기(가정하자)
       let data=[
        {id:1, title:'제목1', content:'내용1'},
        {id:2, title:'제목2', content:'내용2'},
        {id:3, title:'제목3', content:'내용3'},
       ]

       //setNumber([...number]);
       setBoards([...data]); //...data앞에 아무것도 없으므로, 빈 첫 데이타에 추가 하는 꼴.
       setUser({id:1, username:"kim"});
      }, []); //빈 배열이면 한번만 실행됨. 어디에도 의존 안 하므로.

    return (
        <div>
           {/*//Home.js로 데이터 날리기*/}
        <Home boards={boards} setBoards={setBoards} user={user} number={number} addNumber={addNumber}/> 
            
        </div>
    );
};

export default HomePage;