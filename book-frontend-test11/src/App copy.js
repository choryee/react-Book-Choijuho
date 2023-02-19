//import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/user/book/Home';
import SaveForm from './pages/user/book/SaveForm';
import Detail from './pages/user/book/Detail';
import LoginForm from './pages/LoginForm';
import JoinForm from './pages/user/book/JoinForm';
import UpdateForm from './pages/user/book/UpdateForm';

function App() {
  
  return (
    <div >
     
      <Header/>
      <Container>
        <Routes>
        <Route path="/" exact={true}  element={<Home/>}/>
        <Route path="/saveForm" exact={true} element={<SaveForm/>}/>
        <Route path="/book/:id" exact={true}  element={<Detail/>}/>
        <Route path="/loginForm" exact={true}  element={<LoginForm/>}/>
        <Route path="/joinForm" exact={true}  element={<JoinForm/>}/>
        <Route path="/updateForm/:id" exact={true} element={<UpdateForm/>}/>
        </Routes>
      </Container>
      
    </div>
  );
}

export default App;