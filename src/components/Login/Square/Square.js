import React from 'react';
import styles from './Square.module.css';


const square = (props) => {
    return(
        <div className={styles.Square} style={{ ...props.styling}}></div>
    );
};

export default square;