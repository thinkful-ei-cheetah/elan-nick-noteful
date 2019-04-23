import React, { Component } from 'react';
import Note from '../Note/Note';
import { Route } from 'react-router-dom';

export class NoteList extends Component {
  render() {
    let notes = this.props.notes;
    if(this.props.match.params.folderId) {
      notes = notes.filter(note => note.folderId === this.props.match.params.folderId);
    }
    if(this.props.match.params.noteId) {
      notes = notes.find(note => note.noteId === this.props.match.params.noteId);
    }

    notes = notes.map(note => <Note key={note.id} name={note.name} modified={note.modified} id={note.id} content={note.content}/>);
    console.log(notes);
    return (
      <main className="notes">
        <ul>
          {notes}
        </ul>
      <button>Add note</button>
    </main>
    )
  }
}

export default NoteList
