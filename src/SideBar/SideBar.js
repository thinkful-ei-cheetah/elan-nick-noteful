import React from 'react';
import { Link } from 'react-router-dom';

export default function SideBar(props) {
  const folders = props.folders.map( (folder, i) => {
    return (
      <Link to={'/folder/' + folder.id} key={folder.id}>
        <li> 
          Folder  { i+1 }
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
