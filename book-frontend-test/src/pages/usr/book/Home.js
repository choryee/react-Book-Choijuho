import React from 'react';

const Home = () => {

    const books=[
        {id:1, name:"kim"},
        {id:2, name:"lee"},
        {id:3, name:"park"}
    ]

    return (
        <div>
           books.map((b)=><h5>{b.id} {b.name}</h5> book={b}) 
            
        </div>
    );
};

export default Home;