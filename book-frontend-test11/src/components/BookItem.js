import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
   // const id=props.books22.id;
   // const title=props.books22.title;
  // const {id,title,author}=props.book;
  // const { author}=props.books;
   
   const title=props.title;
  //  const author=props.author;
   // console.log('book.props author===>', {author});
    console.log('book.props title===>', title);

//    const {id, title, author}=props.book22;
//     console.log('book.props===>', author);
//     console.log('book.props===>', props.name);
//     if(author) alert('id넘어옴');

   // {books.map((book)=> <h3 key={book.id}> author:{book.author}, title:{book.title} </h3>)}

    return (
        <div>
            <Card style={{ width: '18rem' }}>
           
                <Card.Body>
                   {/* <Card.Title> title: {title}  </Card.Title> */} 
                    <Card.Text>author:  {props.name}</Card.Text>
                  {/*<Link to={'/book/'+id} className="btn btn-primary">
                        /메인페이지/ 상세보기(BookItem.js)
                        </Link>
                        */}  
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default BookItem;