import React from 'react';
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//28강. bootstarap에서 가져 온것.
//<Link to="/" className="navbar-brand">는 원래 bootstrap에서 <Navbar.Brand href="#home">으로 된 것
//을 수정한것. 즉, <Navbar.Brand에서 className="navbar-brand" 처럼. N를 소문자로 .을 -로 바꿈.

const Header = () => {

    return (
        <>
         <Navbar bg="dark" variant="dark">
          
            <Link to="/" className="navbar-brand">
              홈
            </Link>

            <Nav className="mr-auto">
              <Link to="/joinForm" className="nav-link">
                회원가입
              </Link>

              <Link to="/loginForm" className="nav-link">
                로그인
              </Link>
              
              <Link to="/saveForm" className="nav-link">
                글쓰기
              </Link>
            </Nav>
            {' '}
          
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}

      </Navbar>
      <br />
     
      </>
    );
};

export default Header;