import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';



//30강.첨
const UpdateForm = (props) => {

    const navigate = useNavigate();

    const {id}=useParams();

//폼안에 글자를 적은 것이 서버로 가야하므로, 그것을 상태(첨에서 빈 상태에서 글자 입력 상태)로 관리해야
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
      }, []); // useEffect()


    const changeValue=(e)=>{
        //changeValue클릭할때 마다 발생하는 모든 이벤트를 e가 가지고 있다.
        setBook({
            ...book,
            [e.target.name]:e.target.value //키:값 형태
        })
    }

    const submitBook=(e)=>{
     //버튼이 폼안에 있을때는 버튼클릭하면, submit되므로 그것을 막기위해.밑 
        e.preventDefault();
        fetch('http://localhost:8080/book/'+id, {
            method:'put',
            headers:{
                'Content-Type':'application/json; charset=utf-8',
            },
            body:JSON.stringify(book),
        })
          .then((res)=>{
            console.log('SaveForm.js res===>>>',res);
            
            if(res.status===200){
                alert('책 수정 성공!!')
                return res.json();
            }else{
                return null;
            }
          })
          .then((res)=>{ // 바로 위 return res.json();를 받은 .then((res) res임.
            if(res!==null){
                console.log('SaveForm.js props==>>',props);
              //밑에 안 됨. 30강.뒤
              navigate('/book/'+id);


            }else {
                alert("책 수정 실패했습니다!!!");
            }
          })
          .catch((error)=>{ //바로 위 .then((res)=>{ 부분에서 에러 날때, 여기 catch 타는 것.
            console.log('에러남 error===>', error)
          })
    };

    return (

        <div>
        <Form onSubmit={submitBook}>

             <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" value={book.title} onChange={changeValue} placeholder="Enter Title" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" name="author"  value={book.author} onChange={changeValue} placeholder="Enter Author" />
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

export default UpdateForm;