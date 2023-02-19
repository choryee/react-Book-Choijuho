import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



//32강. 에러나서 안 됨.
const UpdateForm = (props) => {

    const navigate = useNavigate();

    const {id} = useParams();

    const[book,setBook]=useState({
        title:"",
        author:"",
    });


    useEffect(() => {
        fetch('http://localhost:8080/book/' + id)
          .then((res) => res.json())
          .then((res) => {
            setBook(res);
          });
      }, []);


    const changeValue=(e)=>{
        setBook({
            ...book,
            [e.target.name]:e.target.value //키:값 형태
        })
    }

    const submitBook=(e)=>{
        e.preventDefault();
        fetch('http://localhost:8080/book/'+id, {
            method:'put',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
            },
            body:JSON.stringify(book),
        })
          .then((res)=>{
            console.log(1,res);
            
            if(res.status===200){
                return res.json();
            }else{
                return null;
            }
          })
          .then(res=>{
            if(res!==null){
                navigate("/book/"+id);
            }else {
                alert("책 수정에 실패했습니다!!!")
            }
            console.log(res);
        });

        //alert("입력완료!!")
    };

    return (
        <div>
    <Form onSubmit={submitBook}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" 
        onChange={changeValue} 
        name="title"
        value={book.title}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Enter author" onChange={changeValue} 
        name="author"
        value={book.author} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default UpdateForm;