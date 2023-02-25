import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SaveForm = () => {
    const navigate = useNavigate();

    const [book, setBook]=useState({title:'', author:''});

    const changeValue=(e)=>{
        //changeValue클릭할때 마다 발생하는 모든 이벤트를 e가 가지고 있다.
        setBook({
            ...book,
            [e.target.name]:e.target.value //키:값 형태
        })
    }

    //이 밑은 Book-frontend submitBook과 좀 다름. 에러나면 그것을 보라.
    const submitBook=(e)=>{
        e.preventDefault();
        fetch("http://localhost:8080/book",{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
            },
            body:JSON.stringify(book)       
        })
        .then(res=>{  //이 밑은 Book-frontend submitBook과 좀 다름. 에러나면 그것을 보라.
            if(res.status===200){
                alert('책 등록 성공!!')
                navigate('/')
                
            }else{
                alert('책 등록 실패!!')
            }
        })

        .then(
        )

    }



    // const [text, setText]=useState('');

    // const changeText=(e)=>{
    //     let textAuthor=e.target.value;
    //     let textName=e.target.name;
    //     console.log('textAuthor.value===>', textAuthor);
    //     console.log('e.target===>', e);
    //     setText([...text, textAuthor]);
    //     // const {name, value}=e.target.value;
    //     // console.log('name===>>', name);

    // }

    // const sendText=(e)=>{
    //     e.preventDefault();

    // }

    // <Form.Control는 bootstrap에서 input를 개량해서 만든 input일종.

    return (
        <div>
            <Form onSubmit={submitBook}>

                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" onChange={changeValue} placeholder="Enter Title" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author"  onChange={changeValue} placeholder="Enter Author" />
                    <Form.Text className="text-muted">
                    
                    </Form.Text>
                </Form.Group>
      
                <Button variant="secondary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SaveForm;