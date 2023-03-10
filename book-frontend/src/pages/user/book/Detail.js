import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//31강.09'00

const Detail = (props) => {
    const navigate = useNavigate();

    console.log('detail.js props===>', props);
    console.log("================");

    //const id=props.match.params.id;
    //const id = props.match.params.id;
    const {id} = useParams();

    const[book,setBook]=useState({
        id:'',
        title:'',
        author:''
    });

    useEffect(() => {
        fetch('http://localhost:8080/book/' + id)
          .then((res) => res.json())
          .then((res) => {
            setBook(res);
          });
      }, []);


      const deleteBook=()=>{
        fetch('http://localhost:8080/book/'+id,{
            method:'DELETE',
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log('delete id===>', id)
            console.log('delete res==>', res)

            if(res===200){
                //props.history.push('/');
                navigate('/');
                
            }else{
                alert("삭제 실패했습니다.");
            }
        });
      };


      const updateBook=()=>{
        //32강. 10'00 밑에것 작동 안 함.
        navigate('/updateForm/'+id);
      }

      const ListBook=()=>{
        navigate('/');
      }


    return (
        <div>
            <h1>책 상세보기(Detail.js)</h1>
            <Button variant="warning" onClick={updateBook}>수정</Button>
            {' '}
            <Button variant="danger" onClick={deleteBook}>삭제</Button>
            {' '}
            <Button variant="warning" onClick={ListBook}>리스트</Button>
            <hr/>
            <h6> 저자 : {book.author}</h6>
            <h6> 책 제목 : {book.title}</h6>
        </div>
    );
};

export default Detail;