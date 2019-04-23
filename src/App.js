import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Header';
import SideBar from './SideBar';

class App extends Component {
  state = {
    folders: [...this.props.store.folders],
    notes: [...this.props.store.notes]
  }

  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <Route path="/" render={() => <SideBar folders={this.state.folders} />} />
          <section className="notes">
            <ul>
              <li>
                <h3>Note 1</h3>
                <p>Date modified</p>
                <button>Delete</button>
              </li>
            </ul>
            <button>Add note</button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
