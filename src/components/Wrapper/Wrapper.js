import React from 'react';
import styles from './Wrapper.module.css';
import Menu from '../Menu/Menu';



const wrapper = (props) => {
    
    return(
        <div className={styles.Wrapper}>
            <Menu 
                clicked = {props.toggleHandler}
            />
            <main className={styles.Content}>
                {props.children}
            </main>
        </div>
    );
};

export default wrapper;