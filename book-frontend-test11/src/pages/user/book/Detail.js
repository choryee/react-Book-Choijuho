import axios from 'axios';
import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//31강.09'00

const Detail = (props) => {
    const navigate = useNavigate();
   // const {author, title}=props.books;

   // console.log('detail.js props===>', props); //다른데서 Detail로 넘긴게 없으니, 빈 값이다.
    console.log("=Detail js 호출됨---------");

    //const id=props.match.params.id;
    //const id = props.match.params.id;
    const {id} = useParams();
    // const id=props.match.params.id;

    const[book,setBook]=useState({
        id:'',
        title:'',
        author:'',
               
    });

   const [commentArray, setComentArray] = useState([]);

   const feed = ({ commentArray });
   console.log('feed.book==>', feed.book);
   console.log('feed.commentArray==>', feed.commentArray);


    useEffect(() => {
        fetch('http://localhost:8080/book/' + id)
          .then((res) => res.json())
          .then((res) => {
            console.log('Detail res.reply.content==>>', res.reply[0].content)

            setComentArray(res.reply);
            setBook(res);
          });
      }, []); // useEffect()

      
 
        // useEffect(() => {

        //   const fetchUsers = async () => {
        //     try {
        //       // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        //     //  setError(null);
        //     //  setUsers(null);
        //       // loading 상태를 true 로 바꿉니다.
        //    //   setLoading(true);
        //       const response = await axios.get(
        //         'http://localhost:8080/book/' + id
        //       );
        //       setBook(response.data); // 데이터는 response.data 안에 들어있습니다.
        //       console.log('response.data==>>', response.data)
        //     } catch (e) {
        //       //setError(e);
        //       console.log('에러==>>',e)
        //     }
        //    // setLoading(false);
        //   };
      
        //   fetchUsers();
        // }, []);


      const deleteBook=()=>{
        fetch('http://localhost:8080/book/'+id,{
            method:'DELETE',
        })
        // res.json()이 아니라, res.text()
        .then((res)=>res.text())
        .then((res)=>{
            console.log('delete id===>', id)
            console.log('delete res==>', res)

            if(res==='ok'){
                //props.history.push('/');
                alert("삭제를 했습니다.");
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

// {books.map((book)=> (<BookItem key={book.id} books={book}/>))}
// map쓰기 위해서는, const [commentArray, setComentArray] = useState([]);에 useState([]) 빈 배열.
// 위 처럼, 객체 안에 또 다른 배열되는 것은 따로 useState 만들어야.
// <ListGroup key={index} 에 key값 있어야.
//https://velog.io/@moolbum/React-%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%EB%8C%93%EA%B8%80
// https://ddeck.tistory.com/29
// https://react.vlpt.us/integrate-api/01-basic.html
// https://bum-developer.tistory.com/entry/React-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%9E%91%EC%97%85%EC%BD%9C%EB%B0%B1-%ED%95%A8%EC%88%98-Promise-async-await
// https://velog.io/@hongduhyeon/React-useState%EC%99%80-%EA%B0%9D%EC%B2%B4-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%B4%EC%84%9C-map-%ED%95%A8%EC%88%98-%EC%9E%91%EC%84%B1
// https://codingbroker.tistory.com/123


    return (
        <div>
            <h1>책 상세보기(Detail.js)</h1>

            <Button variant="warning" onClick={updateBook}>수정</Button>
            {' '}
            <Button variant="danger" onClick={deleteBook}>삭제</Button>
            {' '}
            <Button variant="success" onClick={ListBook}>리스트</Button>
            <hr/>
            <h6> 책 제목 : {book.title} </h6>
            <h6> 저자 : {book.author}  </h6>
            
            <hr/>

            <div className='card'>
                          
                <div className='card-body'><textarea className='form-control' rows="1"></textarea></div>
                <div className='card-footer'><Button className='' variant='danger'>등록</Button></div>
            </div>
            <br/>

            <div className='card'>
               <div  className='card-header'>댓글 리스트</div>               
            
               {commentArray.map((book1, index) => (              
            
                  <ListGroup key={index} className='reply--box d-flex'>
                      <ListGroup.Item className='reply--1 d-flex justify-content-between'>
                        <div > {book1.content} </div>

                        <div className='d-flex'>
                          <div className='font-italic'>작성자Id : {book1.id} &nbsp;</div>
                          <Button className='badge'>삭제</Button>
                        </div>
                      </ListGroup.Item>                
                  </ListGroup>
               
              ) )}             
              
            </div>
        </div>
    );
};

export default Detail;