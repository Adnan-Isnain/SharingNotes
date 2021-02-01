import React from 'react';
import notesLogo from '../../../assets/images/sharing-notes2.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={notesLogo} alt="MyNotes"/>
    </div>
);

export default logo;