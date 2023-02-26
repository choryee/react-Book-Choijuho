import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookItem = (props) => {
    const {id, author, title}=props.books
    console.log('book.props===>', author);

   // {books.map((book)=> <h3 key={book.id}> author:{book.author}, title:{book.title} </h3>)}

    return (
        <div>
            <Card style={{ width: '18rem' }}>
           
                <Card.Body>
                    <Card.Title> title: {title}  </Card.Title>
                    <Card.Text>author: {author} </Card.Text>
                    <Link to={'/book/'+id} className="btn btn-primary">
                        /메인페이지/ 상세보기(BookItem.js)
                        </Link>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default BookItem;