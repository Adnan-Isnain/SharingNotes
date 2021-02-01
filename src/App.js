import React, {Component} from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Cards from './containers/Cards/Cards';
import About from './components/About/About';
import NewNote from './components/NewNote/NewNote';
import Note from './containers/Note/Note';
import EditNote from './components/EditNote/EditNote';
import Login from './components/Login/Login'

class App extends Component {
    state = {
      notes: [
              {
                  "id" : "u94t5u54gj94g85go2lkm",
                  "title" : "Curabitur nunc magna",
                  "author" : "Riou Suikoden",
                  "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
              },
              {
                  "id" : "12egg1v2ej3v1jryh4bkr42jt",
                  "title" : "Lorem ipsum dolor sit amet",
                  "author" : "Jowy Suikoden",
                  "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
              },
              {
                  "id" : "n92i2tn5iu5j3nfo35",
                  "title" : "condimentum sed",
                  "author" : "Nanami Suikoden",
                  "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
              },
              {
                  "id" : "0eigje09fjg0e",
                  "title" : "Aliquam pretium quis",
                  "author" : "Flik Suikoden",
                  "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
              },
              {
                  "id" : "50f9bei09j408t40nnnnn",
                  "title" : "ligula a luctus porta",
                  "author" : "Viktor Suikoden",
                  "content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nunc magna, condimentum sed porttitor eu, ornare sed velit. Aliquam pretium quis dui at varius. Integer consectetur, ligula a luctus porta, lacus mauris sollicitudin lectus, id bibendum metus tortor dignissim massa. Nulla venenatis maximus justo, a accumsan lacus tempus ac. Fusce porttitor purus ut nisi elementum pulvinar. Quisque pretium non nunc eu tempus. Quisque feugiat erat mi, sit amet aliquet erat iaculis et. Praesent euismod ullamcorper bibendum. Morbi urna nunc, lobortis sed commodo ac, feugiat non sem. Morbi at iaculis nibh."
              },
      ],
      isAuth: false
  }

  render(){     
    const addNote = (note) => {
        note = {
          ...note,
          id: `${this.state.notes.length + 1}`
        }

        const newNote = this.state.notes.concat(note);
        this.setState({
          ...this.state,
          notes : newNote
        });
        this.props.history.push('/home');
    }

    const editNote = (note) => {
      const lastNote = this.state.notes.filter(el => (el.id !== note.id));
      const newNote = lastNote.concat(note);
      this.setState({
        ...this.setState,
        notes: newNote
      });
      this.props.history.push('/home');
    }

    const removeNote = (id) => {
      const filterNote = this.state.notes.filter(el => (el.id !== id));
      this.setState({
        ...this.state,
        notes: filterNote
      });
      this.props.history.push('/home');
    }

    const loginHandler =  (e) => {
      e.preventDefault();
      this.setState({
        ...this.state,
        isAuth: true
      })
    }

    const LogoutHandler = () => {
      this.setState({
        ...this.state,
        isAuth: false
      })
    }


    let routes = (
      <Switch>
        <Route path="/login" render={() => (<Login onLogin={loginHandler} />)}/>
        <Redirect to="/login" />
      </Switch>
    );

    if(this.state.isAuth){
      routes = (
        <Layout>
          <Switch>
            <Route path="/home" render={() => (<Cards notes={this.state.notes} onRemove={removeNote} />)} />
            <Route path="/about" exact component={About}/>
            <Route path="/new-note" exact render={() => (<NewNote onAdd={addNote}/>)} />
            <Route path="/note/:id" exact render={(props) => (<Note note={this.state.notes} {...props} />)}/>
            <Route path="/note/edit/:id" exact render={() => (<EditNote onEdit={editNote}/>)} />
            <Route path="/logout" exact render={LogoutHandler} />
            <Redirect to="/home" />
          </Switch>
        </Layout>
      );
    }
  
    return (
      <div className="App">
          {routes}
      </div>
    );
  }
}

export default withRouter(App);
