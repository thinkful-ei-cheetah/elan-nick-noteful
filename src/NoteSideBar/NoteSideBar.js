import React from 'react';
import { Link } from 'react-router-dom';

export default function NoteSideBar(props) {
  console.log(props.folderId)
  return (
    <div>
      <Link to='/'>Go Back</Link>
      Folder {props.folderId}
    </div>
  )
}
