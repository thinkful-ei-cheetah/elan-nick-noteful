import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
  return (
    <Link to='/note/:note-id'>
      <li className="note" id={props.id} key={props.id}>
        <h3>{props.name}</h3>
        <p>{props.modified}</p>
        <button>Delete</button>
      </li>
    </Link>
  )
}
