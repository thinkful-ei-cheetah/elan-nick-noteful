import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import NoteList from './NoteList/NoteList';
import NoteSideBar from './NoteSideBar/NoteSideBar';

class App extends Component {
  state = {
    folderIndex: [],
    folders: [...this.props.store.folders],
    notes: [...this.props.store.notes]
  };

  render () {
    // this.state.folderIndex = this.state.folderIndex.map( (_, i) => {

    // })

    return (
      <div className="App">
        <Header />
        <nav>
          <Route 
            exact
            path={["/", "/folder/:folderId"]} 
            render={() => <SideBar folders={this.state.folders}/>} 
          />
          <Route
            path="/note/:noteId"
            render={( {match, history, location} ) => <NoteSideBar folderId={(this.state.notes.find( note => note.id === match.params.noteId)).folderId} />}
          />
        </nav>
      

        <Route
          exact
          path={["/", "/folder/:folderId", "/note/:noteId"]}
          render={({match, history, location}) => <NoteList match={match} notes={this.state.notes}/>
        }/>
          
      </div>
    );
  }
}

export default App;
