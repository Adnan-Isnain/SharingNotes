import React, {useState} from 'react';
import styles from './Card.module.css';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Box from '@material-ui/core/Box';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';
import ArchiveIcon from '@material-ui/icons/Archive';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import NoteDrawer from '../../../components/Navigation/NoteDrawer/NoteDrawer';


const Card = (props) => {  
    const [showMenu, setShowMenu] = useState(false);
    const clickedMoreHandler = () => {
        setShowMenu(!showMenu);
    }

    return(
        <content>
            <div className={styles.Card} key={props.writer + props.id}>    
                <div className={styles.Note}>
                    <div id={styles.MoreIcon}>
                        <IconButton aria-label="display more actions" edge="end" color="inherit" onClick={clickedMoreHandler} >
                            <MoreHorizIcon style={{fontSize: 35}} />
                        </IconButton>
                    </div>
                    <NoteDrawer open={showMenu} note={props} removeNoteHandler={props.onRemove} />
                    <div className={styles.Content}>
                        <Link to={"/note/" + props.id}><h2>{props.title}</h2></Link>
                        <h3>Oleh : {props.author}</h3>
                        <p>{props.content.slice(0,200)} <span>...</span></p>
                        <Link to={"/note/" + props.id} className={styles.Read}><p>Continue Reading...</p></Link>
                    </div>
                </div>
                <div className={styles.Action}>
                    <Box display="flex" justifyContent="space-between">
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <QuestionAnswerIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <SentimentVerySatisfiedRoundedIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <SentimentVeryDissatisfiedRoundedIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" color="inherit">
                            <ArchiveIcon />
                        </IconButton>
                    </Box>
                </div>
            </div>
        </content>
    );
}

export default Card;