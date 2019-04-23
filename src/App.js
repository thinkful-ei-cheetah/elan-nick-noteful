import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import NoteList from './NoteList/NoteList';
import NoteSideBar from './NoteSideBar/NoteSideBar';

class App extends Component {
  state = {
    folders: [...this.props.store.folders],
    notes: [...this.props.store.notes]
  };

  getFolderName = (noteId) => {
    const folderId = this.state.notes.find(note => note.id === noteId).folderId;
    return this.state.folders.find(folder => folder.id === folderId).name;
  }
  render () {

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
            render={( {match} ) => <NoteSideBar 
              folderName={this.getFolderName(match.params.noteId)}/>} />
        </nav>
      

        <Route
          exact
          path={["/", "/folder/:folderId", "/note/:noteId"]}
          render={({match}) => <NoteList match={match} notes={this.state.notes}/>
        }/>
          
      </div>
    );
  }
}

export default App;
