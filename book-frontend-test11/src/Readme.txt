리액트 한글 강의
https://react.vlpt.us/basic/08-manage-input.html

230226. Home.js에서 오류나서 진행안됨.

Nginx는 아파치와 같은 정적서버이지, 톰캣 같은것은 아니다. 32강. 마지막부분
32강 마지막에 빌드하는 것 보여줌
구글창에 'react빌드하기 nginx로 배포' 검색
https://codechacha.com/ko/deploy-react-with-nginx/



Home.js
// {books.map((book)=>(<BookItem key={book.id} books={book}/>))} 돌리는 것이 <BookItem 태그 안에 있어야.
// books={book}/> book이라는 매개변수를 books에 담아서 보내는 것이라, 다른데서 props은 books을 가진다. book이 아니라,
이것은 밑에 const [book, setBook]=useState에서 book과 다른 것.

BookItem,js
const BookItem = (props) => {
    const {id, author, title}=props.books


SaveForm.js 여기 중요한 것 많다.
 const [book, setBook]=useState( // 필드가 2개 인것은 이렇게 세팅한다.
    {title:'', author:''}
    );

    const changeValue=(e)=>{
        //changeValue클릭할때 마다 발생하는 모든 이벤트를 e가 가지고 있다.
        setBook({
            ...book, //왼쪽 안 걸어주면, 먼저 title부분이 author쓸때 날라가 버린다.
            [e.target.name]:e.target.value //키:값 형태, [e.target.name]은 e.target안에 있는것(태그 name="xx"걸어준 것 잡아낸것)
        })
    }

 const submitBook=(e)=>{ //32강에, 또는 book-frontend의 SaveForm.js를 보라.
    fetch().then().then().catch(); 