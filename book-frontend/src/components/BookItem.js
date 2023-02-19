import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


//29강.첨
// Card하나하나 있는 것.

const BookItem = (props) => {

    const {id,title,author}=props.book;
    

    return (
        <div>
        <Card>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Link to={'/book/'+id} className="btn btn-primary">
                상세보기(BookItem.js)
                </Link>
            </Card.Body>
        </Card>





 </div>

    );
};

export default BookItem;