import React from 'react';
import styles from './Profile.module.css';
import ProfilePicture from '../../../assets/images/profile.png';


const profile = (props) => (
    <div className={styles.Profile} style={{margin: props.margin}}>
        <img src={ProfilePicture} alt="MyProfile"/>
    </div>
);

export default profile;