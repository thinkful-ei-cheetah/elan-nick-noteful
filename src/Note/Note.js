import React from 'react';
import { Link } from 'react-router-dom';

export default function Note(props) {
  let content = '';
  if(props.content) {
    content = <p>{props.content}</p>;
  }
  console.log(content);
  return (
    <Link to={'/note/' + props.id}>
      <li className="note" id={props.id} key={props.id}>
        <h3>{props.name}</h3>
        <p>{props.modified}</p>
        <button>Delete</button>
        {content}
      </li>
    </Link>
  )
}
