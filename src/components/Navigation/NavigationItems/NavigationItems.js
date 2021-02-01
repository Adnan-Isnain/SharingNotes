import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" >My Notes</NavigationItem>
    <NavigationItem link="/logout" exact>Logout</NavigationItem>
  </ul>
);

export default navigationItems;