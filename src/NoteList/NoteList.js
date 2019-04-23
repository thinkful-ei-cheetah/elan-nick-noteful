import React, { Component } from 'react';
import Note from '../Note/Note';
import { Route } from 'react-router-dom';
import NoteContent from '../NoteContent/NoteContent';

export class NoteList extends Component {
  render() {
    let notes = this.props.notes;
    let noteDesc = '';

    if(this.props.match.params.folderId) {
      notes = notes.filter(note => note.folderId === this.props.match.params.folderId);
    }

    if(this.props.match.params.noteId) {
      notes = notes.filter(note => note.id === this.props.match.params.noteId);
      noteDesc = <NoteContent content={notes[0].content} />;
    }
    console.log(notes);
    notes = notes.map(note => <Note key={note.id} name={note.name} modified={note.modified} id={note.id} />);
    
    return (
      <main className="notes">
        <ul>
          {notes}
          {noteDesc}
        </ul>
      <button>Add note</button>
    </main>
    )
  }
}

export default NoteList
