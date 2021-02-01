import React from 'react';
import styles from './Menu.module.css';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import NoteIcon from '@material-ui/icons/Note';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import DraftsIcon from '@material-ui/icons/Drafts';
import Button from '@material-ui/core/Button';
import Profile from '../Pics/Profile/Profile';
import {NavLink} from 'react-router-dom';


const menu = (props) => (
    <nav className={styles.navItem}>    
        <ul>
            <li><HomeRoundedIcon id={styles.Icon}/><NavLink to="/#">HOME</NavLink></li>
            <li><NoteIcon id={styles.Icon}/><NavLink to="/#">FAVORITE</NavLink></li>
            <li><PersonOutlineRoundedIcon id={styles.Icon}/><NavLink to="/about">ABOUT ME</NavLink></li>
            <li><SettingsIcon id={styles.Icon}/><NavLink to="/#">SETTING</NavLink></li>
            <li><DraftsIcon id={styles.Icon}/><NavLink to="/#">DRAFTS</NavLink></li>
            <li>
                <div className={styles.Group}>
                    <Profile margin={"20px 0 0 35px"}/>
                    <h4>Adnan Isnain Nurussalam</h4>
                    <NavLink to="/new-note">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            style={{width: '200px', fontFamily: 'inherit'}}
                        >
                            NEW NOTE
                        </Button>
                    </NavLink>
                </div>
            </li>
        </ul>
    </nav>
)

export default menu;