import React from 'react';
import styles from './Login.module.css';
import BackgroundImage from '../../../assets/images/wallpaper-login.jpg';

const login = () => (
    <img src={BackgroundImage} alt="BackgroundImage" className={styles.Login} />
);

export default login;