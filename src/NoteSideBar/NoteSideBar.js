import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteSideBar(props) {
  return (
    <div>
      <Link to='/'>Go Back</Link>
      {props.folderName}
    </div>
  )
}
