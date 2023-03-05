import axios from 'axios';
import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
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
  // console.log('feed.book==>', feed.book);
   console.log('feed.commentArray==>', feed.commentArray);


    useEffect(() => {
        fetch('http://localhost:8080/book/' + id)
          .then((res) => res.json())
          .then((res) => {
          //  console.log('Detail res.reply[0].content==>>', res.reply[0].content)

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

        const[text,setText]=useState('');
        const changeText=(e)=>{
          setText(e.target.value);
        }



       const replySave=(e)=>{ //댓글 등록은 bookId도 저장되야 하므로, 추가 코드가 있다. ReplyService.java확인
        //
          e.preventDefault();

         // const bookId1=id;
         console.log('id===>', id);

          const replyContent=({
              content: text,
              bookId : id
          });         

          console.log('replyContent==> ', replyContent);

          fetch('http://localhost:8080/book/'+id+'/reply',{
              method:'post',
              headers:{
                'Content-Type':'application/json; charset=utf-8',
            },
              body:JSON.stringify(replyContent)  
          })          
          .then(res=>{
            

            if(res.status===200) {
              console.log('res===>>', res);
              alert('댓글등록성공!!!');
              navigate('/book/'+id);
            }else{
              alert('댓글 실패했습니돵!!!');
              navigate('/book/'+id);
            }
          })
          .then()
        }; //-- replySave


        
        const deleteReply=(id, replyid)=>{
          const {deleteBookId}=id;
          // e.preventDefault();
         // const replyId1=e.target.className.value;
          console.log('deleteBookId===>', deleteBookId); //받아옴.객체로

          fetch('http://localhost:8080/book/'+deleteBookId+'/delete/'+replyid,{
            method:'DELETE',
        })
          // res.json()이 아니라, res.text()
          .then((res)=>res.text())
          .then((res)=>{
              console.log('delete id===>', id)
              console.log('delete res==>', res)

              if(res==='ok'){
                  //props.history.push('/');
               //   alert("댓글 삭제를 했습니다.");
                  navigate('/');
                  
              }else{
                 // alert("댓글 삭제 실패했습니다.");
              }
          }
          );
          };



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
               <Form>   
                <input type={'hidden'} id="bookId" value={commentArray.bookId}></input>       
                <div className='card-body'><textarea id="reply-content" value={text} onChange={changeText} className='form-control' rows="1"></textarea></div>
                 <p>{text} </p>
                <div className='card-footer'><Button id="btn-reply-save" onClick={replySave} className='' variant='danger'>댓글등록</Button></div>
                </Form> 
            </div>
            <br/>


            <div className='card'>
               <div  className='card-header'>댓글 리스트</div>               
            
               {commentArray.map((book1, index) => (              
            
                  <ListGroup key={index} className='reply--box d-flex'>
                      <ListGroup.Item  value={book1.id} className='reply--1 d-flex justify-content-between'>
                        <div > {book1.content} </div>

                        <div className='d-flex'>
                        <div className='font-italic replyId'  >BookId :{id}, &nbsp;</div>
                          <div className='font-italic replyId'  >작성자Id : {book1.id}, &nbsp;</div>
                          <div className='font-italic'>작성일 : {book1.createDate} &nbsp;</div>
                          {/* 
                          <Button className='badge' >삭제</Button>
                          */}
                          <Button className='badge' onClick={deleteReply({id}, book1.id)}>삭제</Button>
                          
                        </div>
                      </ListGroup.Item>                
                  </ListGroup>
               
              ) )}             
              
            </div>
        </div>
    );
};

export default Detail;