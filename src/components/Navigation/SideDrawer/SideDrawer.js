import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../../Pics/Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import styles from "./SideDrawer.module.css";
import Backdrop from '../../UI/Backdrop/Backdrop';
import NoteIcon from '@material-ui/icons/Note';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';
import Profile from '../../Pics/Profile/Profile';

const sideDrawer = (props) => {
    let attachedstyles = [styles.SideDrawer, styles.Close];
    if(props.open){
        attachedstyles = [styles.SideDrawer, styles.Open];
    }

    return (
        <React.Fragment>
        <Backdrop show={props.open} clicked={props.close} />
        <div className={attachedstyles.join(' ')} onClick={props.close} >
            <div className={styles.Logo}>
                <Logo/>
            </div>
            <nav>
                {/* <NavigationItems isAuthenticated={props.isAuth} /> */}
                {/* <NavigationItems /> */}
                <ul className={styles.List}>
                    <li><HomeRoundedIcon id={styles.Icon}/><NavLink to="/#">HOME</NavLink></li>
                    <li><NoteIcon id={styles.Icon}/><NavLink to="/#">FAVORITE</NavLink></li>
                    <li><PersonOutlineRoundedIcon id={styles.Icon}/><NavLink to="/about">ABOUT ME</NavLink></li>
                    <li><SettingsIcon id={styles.Icon}/><NavLink to="/#">SETTING</NavLink></li>
                    <li><DraftsIcon id={styles.Icon}/><NavLink to="/#">DRAFTS</NavLink></li>
                    <li>
                        <div className={styles.Group}>
                            <Profile margin={"90px 0 0 35px"}/>
                            <h4>ADNAN ISNAIN N</h4>
                            <NavLink to="/new-note">
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    style={{width: '200px', fontFamily: 'inherit'}}
                                    // onClick={() => props.clicked()}
                                >
                                    NEW NOTE
                                </Button>
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        </React.Fragment>
    );
};

export default sideDrawer;