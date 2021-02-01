import React, {Component} from 'react';
import styles from './NewNote.module.css';
import {withRouter} from 'react-router-dom';
import Backdrop from '../UI/Backdrop/Backdrop';

class NewNote extends Component {

    state = {
        id: null,
        title: "",
        content: "",
        author: "Adnan Isnain Nurussalam"
    };

    render(){
        const inputChangeHandler = (e) => {
            const {name, value} = e.target;
            this.setState({
                ...this.state, [name] : value
            });
        }
    
        const submitNoteHandler = (e) => {
            e.preventDefault();
            this.props.onAdd(this.state);
        }
    
        const cancelHandler = (e) => {
            e.preventDefault();
            this.props.history.push('/');
        }

    return(
        <React.Fragment>
            <Backdrop show={true}/>
            <div className={styles.NewNote}>
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
                    <button id={styles.Submit} onClick={submitNoteHandler}>Add Note</button>
                    <button id={styles.Cancel} onClick={cancelHandler}>Cancel</button>
                </form>
             </div>
        </React.Fragment>
    );
    }
}; 

export default withRouter(NewNote);
