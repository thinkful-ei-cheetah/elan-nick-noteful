import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {
  const folders = props.folders.map( (folder) => {
    return (
      <Link to={'/folder/' + folder.id} key={folder.id}>
        <li> 
          {folder.name}
        </li>
      </Link>
    )
  });

  return (
    
    <nav className="side-bar">
      <ul>
        {folders}
      </ul>
      <button>Add folder</button>
    </nav>
  )
}
