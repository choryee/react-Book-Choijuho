import React, { useEffect, useState } from 'react';
import MainPage from './MainPage';
import Home2 from './pages/user/book/Home2';
import Home from './pages/user/book/Home';
import HomePage from './pages/user/book/HomePage';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/user/book/Detail';
import Header from './components/Header';
import SaveForm from './pages/user/book/SaveForm';
import UpdateForm from './pages/user/book/UpdateForm';
import BookTest from './pages/user/book/BookTest';
import BookItem from './components/BookItem';
//import BookItem from '../../../components/BookItem';

const App = () => {


//  {books.map((book)=><h1>author:{book.author}, title: {book.title}</h1> )}
// {books.map(book=><h1>author:{book.author}, title: {book.title}</h1> )} book에 ()없어도 됨.
//console.log('author==>', )
// {/* <HomePage/> */}
    return (
        <div>
          

       {/*<BookTest/>*/} 

         {/*<Home/>*/} 

     

        <Header/>
        <Container>
          
        <BookItem/>

        <Routes>
        <Route path="/" exact={true}  element={<Home/>}/>
        <Route path="/book/:id" exact={true}  element={<Detail/>}/>
        <Route path="/updateForm/:id" exact={true} element={<UpdateForm/>}/>
        <Route path="/saveForm" exact={true} element={<SaveForm/>}/>
        
        
        {/*
        <Route path="/loginForm" exact={true}  element={<LoginForm/>}/>
        <Route path="/joinForm" exact={true}  element={<JoinForm/>}/>        
        */}

        </Routes>
      </Container>
          
        
          
        </div>
    );
};

export default App;