import React, {Component} from 'react';
import styles from './NoteDrawer.module.css';
// import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ShareIcon from '@material-ui/icons/Share';
import {withRouter} from 'react-router-dom';



class NoteDrawer extends Component{

  render(){
    let attachedstyles = [styles.NoteDrawer, styles.Close];
    if(this.props.open){
        attachedstyles = [styles.NoteDrawer, styles.Open];
    }
    return(
        <div className={attachedstyles.join(' ')}>
          <Button size="small" color="primary"  startIcon={<EditIcon />} onClick={() => (this.props.history.push({pathname: `/note/edit/${this.props.note.id}`, note: this.props.note}))}>
            Edit Note
          </Button>
          <Button size="small" color="secondary" startIcon={<DeleteIcon />} onClick={() => this.props.removeNoteHandler(this.props.note.id)}>
            Remove Note
          </Button>
          <Button size="small"  startIcon={<ShareIcon />}>
            Share Note
          </Button>
        </div>
    );
  }
};

export default withRouter(NoteDrawer);