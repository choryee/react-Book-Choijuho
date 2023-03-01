import React from 'react';

const BookTest = (props) => {
    const author=props.book;

    // if(author) {alert('author 받음')}

    return (
        <div>
            <h1>author: {author}</h1>
        </div>
    );
};

export default BookTest;