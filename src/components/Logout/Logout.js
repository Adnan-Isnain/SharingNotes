import React from 'react';
import styles from './Logout.module.css';
import Backdrop from './../UI/Backdrop/Backdrop';
import SadIcon from '../../assets/images/sad-icon.png';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';


const logout = (props) => {
    return (
    <React.Fragment>
        <Backdrop show={true}/>
        <div className={styles.Logout}>
            <h1>Keluar dari SHARING NOTES</h1>
            <img src={SadIcon} alt="sad" className={styles.SadIcon}/>
            <p>Anda akan berhenti sharing notes sekarang?</p>
            <NavLink to="/home">
                <Button 
                    variant="contained" 
                    color="secondary" 
                    style={{width: '200px', fontFamily: 'inherit'}}
                >
                    Belum Mau
                </Button>
            </NavLink>
            <Button 
                variant="contained"  
                style={{width: '200px', fontFamily: 'inherit', backgroundColor: '#FFF633'}}
                onClick={props.onLogout}
            >
                Iya
            </Button>
        </div>
    </React.Fragment>
    );    
};

export default logout;