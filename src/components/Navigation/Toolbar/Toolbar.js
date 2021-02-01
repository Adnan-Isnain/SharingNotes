import React from 'react';
import styles from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Pics/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

// MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from 'react-router-dom';



const Toolbar = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
          margin: '5px',
          padding: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 200,
          height: 40,
          backgroundColor: 'white',
        },
        input: {
          marginLeft: theme.spacing(),
          flex: 1,
        },
      }));
    const classes = useStyles();

    return(
    <header className={styles.Toolbar}>
            <DrawerToggle clicked={props.toggleHandler} className={classes.hamIcon}/>
            <div className={styles.AppName}>
                <Logo />
                <NavLink to="/" style={{textDecoration: "none", color: "black"}}><h3 id={styles.Title}>SHARING NOTES</h3></NavLink>
            </div>
            <nav className={styles.DesktopOnly}>
                <Paper component="form" className={classes.root}>
                    <InputBase
                        className={classes.input}
                        placeholder="Find Notes ..."
                        inputProps={{ 'aria-label': 'Find Notes ...' }}
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default Toolbar;