import React from 'react';
import styles from './NavigationItem.module.css';
import {Link} from 'react-router-dom';


const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <Link to={props.link}>{props.children}</Link>
    </li>
);

export default navigationItem;