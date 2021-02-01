import React, {Component} from 'react';
import styles from './EditNote.module.css';
import {withRouter} from 'react-router-dom';
import Backdrop from '../UI/Backdrop/Backdrop';

class EditNote extends Component {

    state = {
        id: this.props.location.note.id,
        title: this.props.location.note.title,
        content: this.props.location.note.content,
        author: this.props.location.note.author
    };
    

    render(){
        if(this.props.location.note.id === 'undefined') this.props.history.push('/');
        const inputChangeHandler = (e) => {
            const {name, value} = e.target;
            this.setState({
                ...this.state, [name] : value
            });
        }
    
        const submitNoteHandler = (e) => {
            e.preventDefault();
            this.props.onEdit(this.state);
        }
    
        const cancelHandler = (e) => {
            e.preventDefault();
            this.props.history.push('/');
        }

    return(
        <React.Fragment>
            <Backdrop show={true}/>
            <div className={styles.EditNote}>
                <form>
                    <input 
                        name="title" 
                        placeholder="Title" 
                        value={this.state.title}
                        onChange={inputChangeHandler}
                    />
                    <textarea 
                        name="content" 
                        placeholder="New Note Here..." 
                        rows="20" 
                        value={this.state.content}
                        onChange={inputChangeHandler}
                    />
                    <button id={styles.Submit} onClick={submitNoteHandler}>Save Note</button>
                    <button id={styles.Cancel} onClick={cancelHandler}>Cancel</button>
                </form>
             </div>
        </React.Fragment>
    );
    }
}; 

export default withRouter(EditNote);
