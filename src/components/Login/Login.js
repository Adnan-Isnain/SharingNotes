import React from 'react';
import styles from './Login.module.css';
import Profile from '../Pics/Profile/Profile';
import Square from './Square/Square';


const login = (props) => {
    return(
        <div className={styles.Group}>
            <div className={styles.Background}></div>
            <Square styling={{left: '-30%', bottom:'50%', transform: `rotate(45deg)`}}/>
            <Square styling={{right: '-30%', top:'50%', transform: `rotate(45deg)`}}/>
            <div className={styles.Login}>
                <h2>SIGN IN / SIGN UP</h2>
                <h3>ISI SEMBARANG EMAIL/PASSWORD</h3>
                <Profile className={styles.Profile}/>
                <form>
                    <div className={styles.Input}>
                        <div>
                        <label htmlFor="email"><b>Email</b></label>
                            <input type="text" name="email" placeholder="Enter Your Mail" required/>
                        </div>
                        <div>
                        <label htmlFor="password"><b>Password</b></label>
                            <input type="password" name="password" placeholder="Enter Password" required/>
                        </div>
                        <div>
                            <button id={styles.Submit} onClick={props.onLogin}>Sign In</button>
                        </div>
                        <div>
                            <button id={styles.Register}>Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default login;