import React from 'react';
import Card from './Card/Card';


const cards = (props) => {
    return(
        props.notes.map( el => (
            <Card 
                id={el.id} 
                title={el.title}
                author={el.author} 
                content={el.content}
                key={el.id + el.author}
                onRemove = {props.onRemove}
            />
        ))
    );
};


export default cards;
