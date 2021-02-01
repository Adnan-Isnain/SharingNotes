import React from 'react';
import Card from './Card/Card';


const cards = (props) => {
    // const notes = [
    //     {
    //         "id" : "1",
    //         "title" : "Notes pertama",
    //         "author" : "Adnan Isnain",
    //         "content" : " \\begin{equation}x = (-b +- sqrt(b^2-4ac))/(2a)\\end{equation}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
    //     },
    //     {
    //         "id" : "2",
    //         "title" : "Notes Kedua",
    //         "author" : "Noviana Nitami",
    //         "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
    //     },
    //     {
    //         "id" : "3",
    //         "title" : "Notes Ketiga",
    //         "author" : "Danang Pamungkas",
    //         "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
    //     },
    //     {
    //         "id" : "4",
    //         "title" : "Notes Ke empat",
    //         "author" : "Shofura Tanzila R",
    //         "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
    //     },
    //     {
    //         "id" : "5",
    //         "title" : "Notes ke Lima",
    //         "author" : "Mutia Syifa R",
    //         "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
    //     },
    // ];    
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
