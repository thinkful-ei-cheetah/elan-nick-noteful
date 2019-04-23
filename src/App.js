import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import NoteList from './NoteList/NoteList';

class App extends Component {
  state = {
    folders: [...this.props.store.folders],
    notes: [...this.props.store.notes]
  }

  render () {
    return (
      <div className="App">
        <Header />
        <Route 
          path="/" 
          render={() => <SideBar folders={this.state.folders}/>} />
        <Route
          exact
          path={["/", "/folder/:folderId"]}
          render={({match, history, location}) => <NoteList match={match} notes={this.state.notes}/>
        }/>
          
      </div>
    );
  }
}

export default App;
