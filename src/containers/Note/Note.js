import React from 'react';
import styles from './Note.module.css';

const note = (props) => {
    const id = props.match.params.id;
    const note = props.note.filter(el => (el.id === id))[0];
    return(
        <div className={styles.Note}>
            <h1>{note.title}</h1>
            <h3>Oleh : {note.author}</h3>
            <p>{note.content}</p>
        </div>
    );
};

export default note;