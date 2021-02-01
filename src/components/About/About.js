import React from 'react';
import styles from './About.module.css';
import Image from '../../assets/images/about-pp.png';


const about = () => (
    <div className={styles.Container}>
        <div className={styles.Jumbotron}>
            <img src={Image} alt="profile-about"/>
            <h1>ADNAN ISNAIN N</h1>
            <p>LECTURER | WEB DEVELOPER</p>           
        </div>
        <section className={styles.About}>
            <div className={styles.Container}>
                <div className={styles.Row}>
                    <h2>About Apps</h2>
                    <hr/>
                </div>
                <div className={styles.Row}>
                    <div className={styles.Col}>
                       <p>Nunc ex leo, malesuada at nulla vel, vestibulum laoreet nisl. Nam finibus ex odio, in porttitor nibh sollicitudin nec. Ut a condimentum velit, id lacinia massa. Ut maximus vitae sapien vitae mollis. Nunc mi arcu, venenatis et semper at, sodales sit amet lacus. Nam a ultricies nulla. Donec scelerisque et sapien in pharetra. Fusce egestas volutpat dui vel consequat. Nullam gravida aliquam tincidunt. Aenean vitae fringilla dui. Fusce at dictum sem.</p>
                    </div>
                    <div className={styles.Col}>
                       <p>Nunc ex leo, malesuada at nulla vel, vestibulum laoreet nisl. Nam finibus ex odio, in porttitor nibh sollicitudin nec. Ut a condimentum velit, id lacinia massa. Ut maximus vitae sapien vitae mollis. Nunc mi arcu, venenatis et semper at, sodales sit amet lacus. Nam a ultricies nulla. Donec scelerisque et sapien in pharetra. Fusce egestas volutpat dui vel consequat. Nullam gravida aliquam tincidunt. Aenean vitae fringilla dui. Fusce at dictum sem.</p>
                    </div>
                 </div>
            </div>

        </section>

    </div>
);

export default about;